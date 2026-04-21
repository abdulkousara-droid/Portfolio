import { Button, BUTTON_TYPE_CLASSES } from '@/components/Button/Button';
import { HeaderLinks } from '@/components/Navigation/HeaderLinks/HeaderLinks'
import styles from "./header.module.scss";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <HeaderLinks />

      <Button className={BUTTON_TYPE_CLASSES.OutlineButton} onClick={() => window.open("Abdulkader_Kousara_CV_Resume.pdf", "_blank")}>
        My Resume
      </Button>
    </header>
  );
};