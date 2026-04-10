import { MouseEventHandler } from "react";
import styles from "./Button.module.scss";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className: string
}

export const BUTTON_TYPE_CLASSES = {
  OutlineButton: 'OutlineButton',
  StandardButton: 'StandardButton',
};

export const Button = ({ children, onClick, className}: Props) => {
  return (
    <button onClick={onClick} className={`${styles[className]}`}>
      {children}
    </button>
  );
};
