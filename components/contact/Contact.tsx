import { Reveal } from "@/components/utils/Reveal";
import styles from "./contact.module.scss";
import { AiFillMail } from "react-icons/ai";
import Link from "next/link";
import { useState } from "react";
import { ContactModal } from "./Contactmodal";
//import {DotGrid} from "@/components/DotGrid/DotGrid";

export const Contact = () => {
    const [isOpen, setIsOpen] = useState(false);

    
  return (
    <section className="section-wrapper" id="contact">
      <div className={styles.contactWrapper}>
        <Reveal width="100%">
          <h4 className={styles.contactTitle}>
            Contact<span>.</span>
          </h4>
        </Reveal>
        <Reveal width="100%">
          <p className={styles.contactCopy}>
            Have an idea to discuss? Shoot me an email if you want to connect! You can also find me on{" "}
            <Link
              href="https://www.linkedin.com/in/abdulkader-kousara-006938201/"
              target="_blank"
              rel="nofollow"
            >
              Linkedin.
            </Link>{" "}
          </p>
        </Reveal>
        <Reveal width="100%">
          <button onClick={() => setIsOpen(true)}>
            <div className={styles.contactEmail}>
              <AiFillMail size="2.4rem" />
              <span>Send Email</span>
            </div>
          </button>
        </Reveal>
      </div>
      <ContactModal setIsOpen={setIsOpen} isOpen={isOpen}/>
    </section>
  );
};
