import styles from "./BasketModal.module.css";
import { Modal } from "../Modal/Modal.jsx";
import { useEffect } from "react";

export const BasketModal = ({ isOpen, onClose }) => {
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

  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <Modal>
        <button
          className={styles["basket-modal__button-close"]}
          onClick={onClose}
        >
          x
        </button>
        <div>
          <h1>Basket modal </h1>
        </div>
      </Modal>
    </div>
  );
};
