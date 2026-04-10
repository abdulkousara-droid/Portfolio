import { SectionHeader } from "@/components/utils/SectionHeader";
import { ExperienceItem } from "./ExperienceItem";

export const Experience = () => {
    return (
        <section className="section-wrapper" id="experience">
            <SectionHeader title="Experience" dir="l" />
            {experience.map((item) => (
                <ExperienceItem key={item.title} {...item} />
            ))}
        </section>
    );
};

const experience = [
    {
        title: "Vizzuality, LLC.",
        position: "Frontend Engineer",
        time: "Jun 2023 - Dec 2023",
        location: "Madrid, Spain - Remote",
        description:
            "At Vizzuality, I led the development of high-performance web applications with TypeScript, Next.js, and React.js. I implemented robust state management using Redux.js, integrated compelling data visualizations with Recharts.js, and ensured secure authentication through NextAuth.js. , I also introduced advanced data fetching techniques using React Query to enhance the overall performance and responsiveness of our web applications at Vizzuality.",
        tech: ["TypeScript", "React", "Nextjs", "Tailwind", "Figma", "StoryBook", "Recharts.js"],
    },
    {
        title: "MigraCode Barcelona",
        position: "IT tech trainner",
        time: "Jul 2021 - Jun 2022",
        location: "Barcelona, Spain",
        description:
            "I played a multifaceted role in curriculum development, teaching, mentoring, and community building, with a commitment to empowering aspiring tech professionals, Collaborated closely with senior engineers to design and implement cutting-edge projects, contributing to the continuous enhancement of the Bootcamp syllabus. Led the development of engaging programming content, with a focus on HTML, CSS, JavaScript, React, and NodeJS.",
        tech: [
            "Project Management",
            "Social Collaboration",
            "Diversity & Inclusion",
            "React.js",
            "JavaScript",
            "Node.js",
            "Postgresql",
        ],
    },
    {
        title: "Multicaret",
        position: "Frontend Engineer",
        time: "Dec 2020 - May 2021",
        location: "Remote",
        description: "Developed and maintained web applications using Laravel and PHP, ensuring high performance and responsiveness.\n" +
            "Collaborated with cross-functional teams to implement Agile methodologies, facilitating efficient project delivery.\n" +
            "Applied the Model-View-Controller (MVC) design pattern to create scalable and maintainable code.",
        tech: [
            "Laravel",
            "PHP",
            "Vuejs",
            "Bootstrap",
            "Figma",
            "Git",
            "Github",
        ],
    },
];
