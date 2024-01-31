import { useState, useEffect } from "react";
import styles from "./LandingPage.module.css";

export const LandingPage = ({ quotes }) => {
  const [quote, setQuote] = useState(quotes[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote((prevQuote) =>
        prevQuote === quotes[0] ? quotes[1] : quotes[0]
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [quotes]);

  return (
    <>
      <div className={styles["main__container"]}>
        <main>
          <div className={styles["container-info"]}>
            <h1 className={styles["info_header"]}>LENS Studio</h1>
            <div className={styles["info__content-container"]}>
              <div className={styles["info-left"]}>
                <p className={styles["info-left__text"]}>
                  {/* <br />
                  <span className={styles["info-left__text--span"]}>
                    {" "}
                    
                  </span> */}
                  {quote}
                </p>
                {/* <h2 className={styles["info-left__sub-header"]}>
                 
                </h2> */}
              </div>
              <div className={styles["info-right"]}>
                <img
                  src="../public/images/img-info.jpg"
                  className={styles["info-right__img"]}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};
