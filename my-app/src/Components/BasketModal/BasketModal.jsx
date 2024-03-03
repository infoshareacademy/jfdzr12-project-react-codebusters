import styles from "./BasketModal.module.css";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../providers/theme.tsx";
import { BasketItem } from "../BasketModal/BasketItem/BasketItem.tsx";
import { db } from "../../../firebase-config.js";
import { collection, doc, onSnapshot } from "firebase/firestore";
import classNames from "classnames";

export const BasketModal = ({ isOpen, onClose, user }) => {
  const { theme } = useContext(ThemeContext);
  console.log("User from basket", user);

  const [portfolioData, setPortfolioData] = useState([]);

  const [basket, setBasket] = useState([]);
  // const [photos, setPhotos] = useState([]);

  console.log("BASKET", basket);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  const getData = () => {
    const basketCollection = doc(db, "basket", user.uid);
    onSnapshot(basketCollection, (doc) => {
      const item = doc.data();
      setBasket(item.photos);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const getPhotosData = () => {
    const photosCollection = collection(db, "photos");
    onSnapshot(photosCollection, (res) => {
      const photos = res.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      setPortfolioData(photos);
    });
  };
  useEffect(() => {
    getPhotosData();
  }, []);

  console.log("PORTFOLIO", portfolioData);
  console.log("Basket", basket);

  const result = portfolioData.filter((obj) => basket.includes(Number(obj.id)));

  console.log("RESULT", result);

  return (
    <div className={classNames(styles["basket__container"], styles[theme])}>
      <h1 className={classNames(styles["basket__header"], styles[theme])}>
        Basket
      </h1>
      <div className={classNames(styles["basket__form"], styles[theme])}>
        <div
          className={`${styles["basket-modal__overlay"]}`}
          onClick={onClose}
        ></div>
        <div>
          <div>
            {basket ? (
              <div>
                {result.map((item, index) => (
                  <div key={index}>
                    <div>{item.author}</div>
                    <img src={item.url} width={300} />
                    <div>{item.price}$</div>
                  </div>
                ))}
              </div>
            ) : (
              <div>Empty basket</div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
