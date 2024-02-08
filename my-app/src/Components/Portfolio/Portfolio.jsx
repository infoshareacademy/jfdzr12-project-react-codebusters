import styles from "./Portfolio.module.css";
import portfolioData from "../../../public/photos.json";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../providers/theme";

export const Portfolio = () => {
  const [imageId, setImageId] = useState(null);
  const { theme } = useContext(ThemeContext);

  return (
    <div className={styles["portfolio__container"]} id="portfolio">
      <h1 className={styles["portfolio__header"]}>Our portfolio</h1>
      <div className={styles["portfolio"]}>
        <h3 className={styles["portfolio__info"]}>
          We are experienced in taking photos for all kinds of circumstances.
          <br />
          Below is a summary of our extensive portfolio, with us you will always
          look good!
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
  );
};
