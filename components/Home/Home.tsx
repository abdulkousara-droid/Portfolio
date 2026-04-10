import { Heading } from "@/components/Navigation/Header/header";
import { NavBarMenu } from "@/components/Navigation/Navbar/NavBarMenu"
import styles from "./Home.module.scss"
import { Hero } from "@/components/Hero/Hero";
import { About } from "@/components/About/About";
import { Experience } from "@/components/Experience/Experience";
import { Projects } from "@/components/projects/Projects";
import { Contact } from "@/components/contact/Contact";
export const Home = () => {
    return (
        <>
            <div className={styles.home}>
                <NavBarMenu />
                <main id="main">
                    <Heading />
                    <Hero />
                    <About />
                    <Projects />
                    <Experience />
                    <Contact />
                    <div
                        style={{
                            height: "200px",
                            background: "linear-gradient(180deg, var(--background), var(--background-dark))",
                        }}
                    />
                </main>
            </div>
        </>
    );
}