import styles from "./NotFound.module.css";

export const NotFound = () => {
  return (
    <div className={styles["not-found__container"]}>
      <div className={styles["not-found__container-info"]}>
        <h1 className={styles["not-found__header"]}>404</h1>
        <p className={styles["not-found__paragraph"]}>OOPS!</p>
        <p className={styles["not-found__paragraph"]}>
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
