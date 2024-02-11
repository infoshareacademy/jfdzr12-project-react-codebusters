import styles from "./Portfolio.module.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../providers/theme.tsx";
import { PortfolioInterface } from "./Portfolio.types";


export const Portfolio = () => {
  const [setImageId] = useState(null);
  const { theme } = useContext(ThemeContext);

  const [portfolioData, setPortfolioData] = useState<PortfolioInterface | null>(null);

  useEffect(() => {
    fetch("/photos.json")
      .then((res) => res.json())
      .then((data) => 
        setPortfolioData(data)
      );
  }, []);
  return (
    portfolioData && (
      <div className={`${styles["portfolio__container"]} ${styles[theme]}`}>
        <h1 className={`${styles["portfolio__header"]} ${styles[theme]}`}>
          Our portfolio
        </h1>
        <div className={styles["portfolio"]}>
          <h3 className={`${styles["portfolio__info"]} ${styles[theme]}`}>
            We are experienced in taking photos for all kinds of circumstances.
            <br />
            Below is a summary of our extensive portfolio, with us you will
            always look good!
          </h3>
        </div>
        <div className={styles["portfolio__photos"]}>
          {portfolioData.photos.map((photo) => (
            <div key={photo.id} className={styles["portfolio__items"]}>
              <Link to={`/portfolio/${photo.id}`}>
                <img
                  src={photo.url}
                  className={styles["portfolio__photo"]}
                  data-id={photo.id}
                  onClick={() => {
                    setImageId(photo.id);
                  }}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    )
  );
};
