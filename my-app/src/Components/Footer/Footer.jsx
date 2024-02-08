import styles from "./Footer.module.css";

export const Footer = () => {
  return (
    <div className={styles["footer__container"]}>
      <p className={styles["footer__text"]}>
        Copyright &copy; 2024{" "}
        <span className={styles["footer__text-company"]}>Lens Studio</span>
      </p>
    </div>
  );
};
