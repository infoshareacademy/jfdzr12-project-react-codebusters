import { ReactElement, useState, useEffect, useContext } from "react";
import styles from "./LandingPage.module.css";
import { ThemeContext } from "../../providers/theme.tsx";
import { LandingPageProps } from "./LandingPage.types";

export const LandingPage = ({ quotes }: LandingPageProps): ReactElement => {
  const [quote, setQuote] = useState<string>(quotes[0]);

  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote((prevQuote) =>
        prevQuote === quotes[0] ? quotes[1] : quotes[0]
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes]);

  return (
    <div className={`${styles["container-info"]} ${styles[theme]}`}>
      <h1 className={`${styles["info_header"]} ${styles[theme]}`}>
        LENS Studio
      </h1>
      <div className={styles["info__content-container"]}>
        <div className={styles["info-left"]}>
          <p className={`${styles["info-left__text"]} ${styles[theme]}`}>
            {quote}
          </p>
        </div>
        <div className={styles["info__image-container"]}>
          {theme === "light" ? (
            <img className={styles["info__img"]} src="../public/images/main-img.png" />
          ) : (
            <img className={styles["info__img"]} src="../public/images/main-img-dark1.png" />
          )}
        </div>
      </div>
    </div>
  );
};
