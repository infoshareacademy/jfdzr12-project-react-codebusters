import styles from "./Modal.module.css";

export const Modal = ({ children }) => {
  return (
    <div className={styles["modal__container"]}>
      <div className={styles["modal__content"]}>{children}</div>
    </div>
  );
};
