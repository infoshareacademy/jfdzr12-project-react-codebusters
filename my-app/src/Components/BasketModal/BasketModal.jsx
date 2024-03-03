import styles from "./BasketModal.module.css";
import { Modal } from "../Modal/Modal.jsx";
import { useContext, useEffect, useState } from "react";
import { ThemeContext } from "../../providers/theme.tsx";
import { BasketItem } from "../BasketModal/BasketItem/BasketItem.tsx";
import { db } from "../../../firebase-config.js";
import { collection } from "firebase/firestore";

export const BasketModal = ({ isOpen, onClose, user }) => {
  const { theme } = useContext(ThemeContext);
  console.log("User from basket", user);

  const [basket, setBasket] = useState([]);
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

  // const getData = () => {
  //   const basketCollection = collection(db, "basket", user.uid);
  //   onSnapshot(basketCollection, (res) => {
  //     const items = res.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data(),
  //     }));

  //     setBasket(items);
  //   });
  // };
  // useEffect(() => {
  //   getData();
  // }, []);

  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <div
        className={`${styles["basket-modal__overlay"]}`}
        onClick={onClose}
      ></div>
      <Modal>
        <button
          className={`${styles["basket-modal__button-close"]} ${styles[theme]}`}
          onClick={onClose}
        >
          x
        </button>
        <div>
          {basket ? (
            <div>
              {basket.map((product, index) => (
                <BasketItem key={index} product={product} />
              ))}
            </div>
          ) : (
            <div>Empty basket</div>
          )}
        </div>
      </Modal>
    </div>
  );
};
