import styles from "./Modal.module.css";
import { ThemeContext } from "../../providers/theme.tsx";
import { useContext } from "react";

export const Modal = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`${styles["modal__container"]} ${styles[theme]}`}>
      <div className={styles["modal__content"]}>{children}</div>
    </div>
  );
};
