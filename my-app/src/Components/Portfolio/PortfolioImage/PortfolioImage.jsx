import { useParams } from "react-router-dom";
import styles from "./PortfolioImage.module.css";
import { ThemeContext } from "../../../providers/theme.tsx";
import { useContext, useState, useEffect } from "react";
import classnames from "classnames";
import { db } from "../../../../firebase-config";
import {
  collection,
  doc,
  getDoc,
  onSnapshot,
  setDoc,
} from "firebase/firestore";

export const PortfolioImage = ({ user }) => {
  const { imageId } = useParams();
  const { theme } = useContext(ThemeContext);
  const [photo, setPhoto] = useState(null);
  const [users, setUsers] = useState([]);

  const handleClick = () => {
    console.log("USER:", user);
    //1.pobrac userów
    //2. jak user istnieje to
    //// Add a new document in collection "photos"
    //pobieramy tablicę, dodajemy
    // await setDoc(doc(db, "basket", user.uid, "photos"), {
    //   id: id,
    // });
    //3.jak usera nie ma to
    // Add a new document with a generated id
    // const newUserRef = doc(collection(db, "basket", user.uid));
    ///4. dodajemy dane to doc
    // await setDoc(doc(db, "basket"), data); ---??? bo to arr?
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

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const docRef = collection(db, "basket");
  //     console.log("docRef", docRef);
  //     const docSnap = await getDoc(docRef);

  //     if (docSnap.exists()) {
  //       console.log("docSnap", docSnap);
  //       console.log("docSnapData", docSnap.data());
  //       setUsers(docSnap.data());
  //     } else {
  //       console.log("No such document!");
  //     }
  //   };

  //   fetchData();
  // }, []);
  // console.log("USERS", users);

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
