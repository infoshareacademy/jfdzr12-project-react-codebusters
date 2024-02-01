import styles from "./Modal.module.css";

export const Modal = ({ children }) => {
  return <div className={styles["modal-container"]}>{children}</div>;
};
