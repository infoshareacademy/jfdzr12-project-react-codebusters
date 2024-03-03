import { useParams } from "react-router-dom";
import styles from "./PortfolioImage.module.css";
import { ThemeContext } from "../../../providers/theme.tsx";
import { useContext, useState, useEffect } from "react";
import classnames from "classnames";
import { db } from "../../../../firebase-config";
import { doc, getDoc } from "firebase/firestore";
import { BasketContext } from "../../../providers/BasketContext.tsx";

export const PortfolioImage = () => {
  const { imageId } = useParams();
  const { theme } = useContext(ThemeContext);
  const [photo, setPhoto] = useState(null);
  const { addToBasket } = useContext(BasketContext);

  const handleClick = (product) => {
    addToBasket(product);
  };

  useEffect(() => {
    const fetchData = async () => {
      const docRef = doc(db, "photos", imageId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        setPhoto(docSnap.data());
      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, [imageId]);

  if (!photo) {
    return <div>Loading...</div>;
  }

  return (
    <div
      className={classnames(styles["portfolio-image__content"], styles[theme])}
    >
      <img src={photo.url} className={styles["portfolio-image__image"]} />
      <div className={styles["portfolio-image__info"]}>
        <h2>{photo.author}</h2>
        <p>
          {photo.height} x {photo.width}
        </p>
        <h3>Price: {photo.price}$</h3>
      </div>
      {photo.amount ? (
        <button
          onClick={() => handleClick(photo)}
          className={classnames(styles["portfolio__input--buy"], styles[theme])}
        >
          Add to basket
        </button>
      ) : (
        <button
          disabled
          className={classnames(
            styles["portfolio__input--buy--disabled"],
            styles[theme]
          )}
        >
          Out of stock
        </button>
      )}
    </div>
  );
};
