import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { Inter , Poppins } from 'next/font/google'

const poppins = Poppins({ weight: ["100", "200", "400", "700", "900"], subsets: ['latin'] } );

export default function App({ Component, pageProps }: AppProps) {

    return (
        <main  id="root" className={poppins.className}>
          <Component {...pageProps} />
        </main>
    )
  }