import styles from "./BasketModal.module.css";
import { Modal } from "../Modal/Modal.jsx";
import { useContext, useEffect } from "react";
import { ThemeContext } from "../../providers/theme.tsx";
import { BasketContext } from "../../providers/BasketContext";
import { BasketItem } from "../BasketModal/BasketItem/BasketItem.tsx";

export const BasketModal = ({ isOpen, onClose }) => {
  const { theme } = useContext(ThemeContext);
  const { basket } = useContext(BasketContext);
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
          {basket.length > 0 ? (
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
