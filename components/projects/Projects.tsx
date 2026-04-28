import {SectionHeader} from "@/components/utils/SectionHeader";
import {Project} from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="Projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};

const projects = [
  {
      title: "LandGriffon",
      imgSrc: "/project-imgs/landgriffon.png",
      code: "https://github.com/Vizzuality/landgriffon",
      projectLink: "https://landgriffon.com/",
      // tech: ["React", "Nextjs", "Sytled Components", "Firebase Auth", "Laravel"],
      tech: ["Nextjs", "TypeScript", "Tailwind", "Nestjs" , "StoryBook"],
    description:
        "empowers companies to measure, manage, and transform agricultural supply chain impacts using an open scientific methodology.",
    modalContent: (
      <>
        <p>
            Worked as a Frontend Engineer in Vizzuality, and created dynamic reusable components
            that were easily testable and could be shared across projects and Ensured
            that all code is well documented, reusable, efficient, and followed best practices.
            created different types of Charts and Graphs for Data Visualization using Recharts.
            created multiple authentication patterns using NextAuth
        </p>
        <p>
            The tech stack is based on Nextjs with Typescript and Tailwind,
            connected to a Nestjs backend, with data stored in Postgresql.
        </p>
      </>
    ),
  },
  {
      title: "Mangrove Atlas",
    imgSrc: "/project-imgs/mangrove.png",
    code: "https://github.com/Vizzuality/mangrove-atlas",
    projectLink: "https://www.globalmangrovewatch.org/",
    tech: ["React", "Redux", "ReduxSaga", "SCSS", "JavaScript"],
    description:
        "Global Mangrove Watch a platform that provides remote sensing data and tools for monitoring real-time information on where and what changes there are to mangroves across the world",
    modalContent: (
      <>
        <p>
          Worked as a Frontend Engineer in Vizzuality created dynamic reusable components and
          integrating api with react saga and redux,
          created different types of Charts and Graphs for Data Visualization using Recharts. improved the Map view and Tilesets using Mapbox
        </p>
      </>
    ),
  },
  {
    title: "CRWN Clothing",
    imgSrc: "/project-imgs/crwn-clothing.png",
    code: "https://github.com/abdulkousara-droid/Crwn_Clothing_v2.git",
    projectLink:
      "https://crwn-clothing-ecommerc.netlify.app/",
    tech: ["React", "Redux", "Styled Components", "Firebase"],
    description:
      "React e-commerce project called CRWN Clothing, which provides an online shopping platform for users to purchase clothing items.",
    modalContent: (
      <>
          <p>
          This is a React e-commerce project called CRWN Clothing, which provides an online shopping platform for users to purchase clothing items. 🛍🤑
          </p>
          <p>
          Features :

            User authentication and authorization
          - Add items to cart and checkout functionality
          - Browse items by categories
          - Search for items
          - Integration with Stripe payment gateway
          </p>

          <p>
          Technologies Used :

            React
          - React Router
          - ContextApi
          - UseReducer
          - Redux-saga
          - Redux-thunk
          - Advanced Hooks
          - Redux
          - Redux Persist
          - Redux Toolkit
          - Redux Reselect
          - Typescript
          - Firebase
          - Stripe/Serverless functions
          - SCSS
          - Styled-Components
          - Node.js
          </p>
      </>
    ),
  },
  {
    title: "Natours Landing Page",
    imgSrc: "/project-imgs/natours.png",
    code: "https://github.com/abdulkousara-droid/TravelAgencyWebsite.git",
    projectLink: "https://abdulkousara-droid.github.io/TravelAgencyWebsite/",
    tech: ["HTML", "SCSS", "Animation"],
    description:
      "Landing Page For Travel Agency",
    modalContent: (
      <>
        <p>
          This is self project that i have made with advanced Sass and animations.
        </p>
      </>
    ),
  },
   {
    title: "FullStack Ai Gym Planner",
    imgSrc: "/project-imgs/gym-planner.png",
    code: "https://github.com/abdulkousara-droid/react-gym-ai-planner.git",
    projectLink: "https://react-gym-ai-planner-seven.vercel.app",
    tech: ["React", "Tailwind CSS", "Expressjs", "NeonAuth", "Prisma", "PostgreSQL", "Openrouter api"],
    description:
      "Ai Gym Planner that generates personalized workout plans based on user input and preferences.",
    modalContent: (
      <>
        <p>
          This is self project that i have made with React and Tailwind, Expressjs for backend and NeonAuth for SignIN and SignUP Authentication, Prisma and PostgreSQL for Database and its hosted on Neon, 
          Openrouter api for the Ai model, backend deployed on Render and Frontend deployed on Vercel.
        </p>
      </>
    ),
  },
];
