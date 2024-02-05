import { useState, useEffect } from "react";
import styles from "./LandingPage.module.css";
import { ThemeContext } from "../../providers/theme";

export const LandingPage = ({ quotes }) => {
  const [quote, setQuote] = useState(quotes[0]);
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
    <div className={styles["container-info"]}>
      <h1 className={styles["info_header"]}>LENS Studio</h1>
      <div className={styles["info__content-container"]}>
        <div className={styles["info-left"]}>
          <p className={styles["info-left__text"]}>{quote}</p>
        </div>
        <div className={styles["info__image-container"]}>
          <img
            className={styles["info__img"]}
            src="../public/images/studio.png"
          ></img>
          {/* <img
            src="../public/images/img-info.jpg"
            className={styles["info-right__img"]}
          /> */}
        </div>
      </div>
    </div>
  );
};
