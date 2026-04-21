import type { NextApiRequest, NextApiResponse } from 'next';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, message } = req.body;

  try {
    const { data, error } = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['abdulkader.kousara@gmail.com'], // Replace with your email
      subject: `New Message from ${email}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h1>New Contact Form Submission</h1>
          <p><strong>Sender:</strong> ${email}</p>
          <p><strong>Message:</strong></p>
          <p style="white-space: pre-wrap; background: #f4f4f4; padding: 15px;">${message}</p>
        </div>
      `,
    });

    if (error) return res.status(400).json(error);
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to send' });
  }
};