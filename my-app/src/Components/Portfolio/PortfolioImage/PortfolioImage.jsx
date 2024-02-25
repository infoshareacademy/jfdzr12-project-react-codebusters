import { useParams } from "react-router-dom";
import portfolioData from "../../../../public/photos.json";
import styles from "./PortfolioImage.module.css";
import { ThemeContext } from "../../../providers/theme.tsx";
import { useContext } from "react";
import classnames from "classnames";
import { db } from "../../../../firebase-config";
import { doc, getDoc } from 'firebase/firestore';
import { collection } from "firebase/firestore";



export const PortfolioImage = () => {
  const { imageId } = useParams();


  const docRef = doc(db, "photos", imageId)
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {

    console.log("No such document!");
  }

  // console.log("pho", docRef["url"])
  // const photo = portfolioData.photos.find((el) => el.id === parseInt(imageId));
  // const photo = docRef.
  // console.log("phot", photo)
  const { theme } = useContext(ThemeContext);



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
      <button>Add to basket</button>
    </div>
  );
};
