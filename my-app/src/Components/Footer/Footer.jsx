import styles from "./Footer.module.css";
import { ThemeContext } from "../../providers/theme";
import { useContext } from "react";
import classnames from "classnames";

export const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={classnames(styles["footer__container"], styles[theme])}>
      <p className={classnames(styles["footer__text"], styles[theme])}>
        Copyright &copy; 2024{" "}
        <span className={styles["footer__text-company"]}>Lens Studio</span>
      </p>
    </div>
  );
};