import styles from "./NotFound.module.css";
import { ThemeContext } from "../../providers/theme";
import { useContext } from "react";
import classnames from "classnames";

export const NotFound = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={classnames(styles["not-found__container"], styles[theme])}>
      <div className={styles["not-found__container-info"]}>
        <h1 className={classnames(styles["not-found__header"], styles[theme])}>
          404
        </h1>
        <p
          className={classnames(styles["not-found__paragraph"], styles[theme])}
        >
          OOPS!
        </p>
        <p
          className={classnames(styles["not-found__paragraph"], styles[theme])}
        >
          <span className={styles["not-found__paragraph--span"]}>CAT</span> NOT
          FOUND
        </p>
      </div>
      <div className={styles["not-found__container-image"]}>
        <img
          src="../public/images/cat-not-found.png"
          className={styles["not-found__image"]}
        ></img>
      </div>
    </div>
  );
};
