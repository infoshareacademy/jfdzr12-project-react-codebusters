import styles from "./Modal.module.css";
import { ThemeContext } from "../../providers/theme.tsx";
import { useContext } from "react";
import classnames from "classnames";

export const Modal = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={classnames(styles["modal__container"], styles[theme])}>
      <div className={classnames(styles["modal__content"], styles[theme])}>
        {children}
      </div>
    </div>
  );
};
