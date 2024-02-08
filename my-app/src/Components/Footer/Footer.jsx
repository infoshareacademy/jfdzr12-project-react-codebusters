import styles from "./Footer.module.css";
import { ThemeContext } from "../../providers/theme";
import { useContext } from "react";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles["footer__container"]}>
      <p className={styles["footer__text"]}>
        Copyright &copy; 2024{" "}
        <span className={styles["footer__text-company"]}>Lens Studio</span>
      </p>
    </div>
  );
};
