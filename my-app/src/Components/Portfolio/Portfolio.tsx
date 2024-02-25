import styles from "./Portfolio.module.css";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../providers/theme.tsx";
import { PortfolioDataInterface } from "./Portfolio.types";
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from "../../../firebase-config";

export const Portfolio = () => {
  const [_, setImageId] = useState<number | null>(null);
  const { theme } = useContext(ThemeContext);

  const [portfolioData, setPortfolioData] = useState(null);


  const getData = () => {
    const photosCollection = collection(db, "photos")
    onSnapshot(photosCollection, res => {
      const photos = res.docs.map(doc => ({
        id: doc.id,
        ...doc.data()

      }))

      setPortfolioData(photos)
    })

  }
  useEffect(() => {
    getData()
  }, [])


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
          {portfolioData.map((photo) => (
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
