import { MouseEventHandler } from "react";
import styles from "./Button.module.scss";

interface Props {
  children: string | JSX.Element;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  className: string
  type?: "button" | "submit" | "reset";
}

export const BUTTON_TYPE_CLASSES = {
  OutlineButton: 'OutlineButton',
  StandardButton: 'StandardButton',
};

export const Button = ({ ...props }: Props) => {
  const { children, onClick, className, type } = props;
  return (
    <button onClick={onClick} className={`${styles[className]}`} type={type}>
      {children}
    </button>
  );
};
