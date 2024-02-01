import styles from "./BasketModal.module.css";
import { Modal } from "../Modal/Modal.jsx";

export const BasketModal = ({ isOpen }) => {
  return (
    <div style={{ display: isOpen ? "block" : "none" }}>
      <Modal>
        <div>
          <h1>Basket modal </h1>
        </div>
      </Modal>
    </div>
  );
};
