import styles from "./Header.module.scss";
import {
    AiFillLinkedin,
    AiFillGithub,
    AiFillInstagram,
} from "react-icons/ai";
import Link from "next/link";
import { motion } from "framer-motion";

export const HeaderLinks = () => {
    return (
        <div className={styles.links}>
            <motion.span
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.0 }}
            >
                <Link href="https://www.linkedin.com/in/kader-kousara-006938201/" target="_blank" rel="nofollow">
                    <AiFillLinkedin size="2.4rem" />
                </Link>
            </motion.span>

            <motion.span
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.0 }}
            >
                <Link href="https://github.com/KaderKousara" target="_blank" rel="nofollow">
                    <AiFillGithub size="2.4rem" />
                </Link>
            </motion.span>


            <motion.span
                initial={{ y: -30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.0 }}
            >
                <Link href="https://www.instagram.com/kader__kousara/" target="_blank" rel="nofollow">
                    <AiFillInstagram size="2.4rem" />
                </Link>
            </motion.span>
        </div>
    );
};
