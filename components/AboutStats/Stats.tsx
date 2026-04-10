import styles from "./Stats.module.scss";
import {AiFillCode, AiFillSmile} from "react-icons/ai";
import {Reveal} from "@/components/utils/Reveal";

export const Stats = () => {
    return (
        <div className={styles.stats}>
            <Reveal>
                <div className={styles.statColumn}>
                    <h4>
                        <AiFillCode size="2.4rem" color="var(--brand)"/>
                        <span>Use at work</span>
                    </h4>
                    <div className={styles.statGrid}>
                        <span className="chip">JavaScript</span>
                        <span className="chip">TypeScript</span>
                        <span className="chip">HTML</span>
                        <span className="chip">CSS</span>
                        <span className="chip">Tailwind</span>
                        <span className="chip">React</span>
                        <span className="chip">Nextjs</span>
                        <span className="chip">Redux and RTK</span>
                        <span className="chip">ReduxThunk</span>
                        <span className="chip">ReduxSaga</span>
                        <span className="chip">ContextApi</span>
                        <span className="chip">NodeJS</span>
                        <span className="chip">Nestjs</span>
                        <span className="chip">Postgresql</span>
                        <span className="chip">ApolloClient GraphQL</span>
                        <span className="chip">GitHub</span>
                    </div>
                </div>
            </Reveal>
            <Reveal>
                <div className={styles.statColumn}>
                    <h4>
                        <AiFillSmile size="2.4rem" color="var(--brand)"/>
                        <span>Use for fun</span>
                    </h4>
                    <div className={styles.statGrid}>
                        <span className="chip">StyledComponents</span>
                        <span className="chip">Scss</span>
                        <span className="chip">PWA</span>
                        <span className="chip">Gatsby</span>
                        <span className="chip">Bootstrap</span>
                        <span className="chip">Figma</span>
                        <span className="chip">Firebase</span>
                        <span className="chip">Supabase</span>
                        <span className="chip">Vercel</span>
                        <span className="chip">Laravel</span>
                        <span className="chip">Vuejs</span>
                    </div>
                </div>
            </Reveal>
        </div>
    );
};
