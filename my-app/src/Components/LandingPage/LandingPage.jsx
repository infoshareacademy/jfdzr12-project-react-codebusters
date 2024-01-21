import { useState, useEffect } from "react";
import styles from "./LandingPage.module.css";

export const LandingPage = () => {
  const quoteArr = [
    "A camera alone does not make a picture. To make a picture you need a camera, a photographer and above all a subject. It is the subject that determines the interest of the photograph. – Man Ray",
    "Capturing Moments, Creating Memories: Lens Studio, where photography meets artistry, offering stunning prints from our portfolio to adorn your world.",
  ];

  const [quote, setQuote] = useState(quoteArr[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuote((quote) => {
        if (quote === quoteArr[0]) {
          return (quote = quoteArr[1]);
        } else {
          return (quote = quoteArr[0]);
        }
      });
    }, 5000);

    return () => clearInterval(interval);
  }, []);

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
