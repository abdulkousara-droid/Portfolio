import { useEffect, useState } from "react";
import { Button, BUTTON_TYPE_CLASSES } from "../Button/Button";
import ReactDOM from "react-dom";
import styles from "./contactmodal.module.scss";
import { motion } from "framer-motion";
import { MdClose } from "react-icons/md";

export const ContactModal = ({
  setIsOpen,
  isOpen,
}: {
  setIsOpen: Function;
  isOpen: boolean;
}) => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const body = document.querySelector("body");

    if (isOpen) {
      body!.style.overflowY = "hidden";
    } else {
      body!.style.overflowY = "scroll";
    }
  }, [isOpen]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const res = await fetch("/api/send", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, message }),
      });

      if (res.ok) {
        alert("Message sent successfully!");
        setEmail("");
        setMessage("");
        setIsOpen(false);
      } else {
        alert("Something went wrong.");
      }
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  const content = (
    <div className={styles.modal} onClick={() => setIsOpen(false)}>
      <button className={styles.closeModalBtn}>
        <MdClose />
      </button>
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
        className={styles.modalCard}
      >
        <form className={styles.form} onSubmit={handleSubmit}>
          <div>
            <label className={styles.label} htmlFor="email">
              your email
            </label>
            <input
              className={styles.input}
              type="email"
              required
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label className={styles.label} htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              required
              placeholder="Your message here..."
              rows={10}
              cols={50}
              className={styles.textarea}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>
          <Button type="submit" className={BUTTON_TYPE_CLASSES.StandardButton}>
            {isLoading ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </motion.div>
    </div>
  );
  if (!isOpen) return <></>;

  return ReactDOM.createPortal(content, document.body);
};
