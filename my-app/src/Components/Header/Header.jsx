import styles from "./Header.module.css";
import classnames from "classnames";
import React, { useState } from "react";
import { BasketModal } from "../BasketModal/BasketModal";

export const Header = () => {
  const [isCartModalOpen, setCartModalOpen] = useState(false);

  const handleCartClick = () => {
    setCartModalOpen(true);
  };

  // const handleCloseCartModal = () => {
  //   setCartModalOpen(false);
  // };

  return (
    <>
      <div className={styles.header__container}>
        <div className={styles["header__image-container"]}>
          <img
            className={styles["header__image"]}
            src="../public/images/logo.png"
          />
        </div>
        <div className={styles["header__links-container"]}>
          <ul className={styles["header__links"]}>
            <li
              className={classnames(
                styles.header__link,
                styles["header__links--examples"]
              )}
            >
              <a href="#portfolio">Portfolio</a>
            </li>
            <li
              className={classnames(
                styles.header__link,
                styles["header__links--pricing"]
              )}
            >
              <a href="#pricing">Pricing</a>
            </li>
            <li
              className={classnames(
                styles.header__link,
                styles["header__links--contact"]
              )}
            >
              <a href="#contact">Contact</a>
            </li>
            <li
              className={classnames(
                styles.header__link,
                styles["header__links--basket"]
              )}
              onClick={handleCartClick}
            >
              Basket
            </li>
          </ul>
        </div>
      </div>
      <BasketModal isOpen={isCartModalOpen} />
    </>
  );
};
