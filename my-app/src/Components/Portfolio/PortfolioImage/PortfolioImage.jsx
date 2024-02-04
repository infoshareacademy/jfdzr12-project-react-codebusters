import { useParams } from "react-router-dom";
import portfolioData from "../../../../public/photos.json";
import styles from "./PortfolioImage.module.css";

export const PortfolioImage = () => {
  const { imageId } = useParams();

  const photo = portfolioData.photos.find(
    (el) => el.id == imageId.replace(":", "")
  );

  console.log("PHOTO", photo);
  return (
    <div className={styles["portfolio-image__content"]}>
      <img src={photo.url} className={styles["portfolio-image__image"]} />
      <div className={styles["portfolio-image__info"]}>
        <h2>{photo.author}</h2>
        <p>
          {photo.height} x {photo.width}
        </p>
        <h3>Price: {photo.price}$</h3>
      </div>
    </div>
  );
};
