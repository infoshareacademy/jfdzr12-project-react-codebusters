import styles from "./Header.module.css";
import classnames from "classnames";
import React, { useContext, useState } from "react";
import { BasketModal } from "../BasketModal/BasketModal";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../providers/theme";

export const Header = () => {
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const { theme, toggleLightTheme, toggleDarkTheme } = useContext(ThemeContext);

  const handleCartClick = () => {
    setCartModalOpen(true);
  };

  const handleCloseCartModal = () => {
    setCartModalOpen(false);
  };

  return (
    <>
      <div className={styles.header__container}>
        <div className={styles["header__image-container"]}>
          <NavLink to="/" className={styles["header__image-link"]}>
            <img
              className={styles["header__image"]}
              src="../public/images/logo.png"
            />
          </NavLink>
        </div>
        <div className={styles["header__links-container"]}>
          <ul className={styles["header__links"]}>
            <li
              className={classnames(
                styles.header__link,
                styles["header__links--examples"]
              )}
            >
              <NavLink to="/portfolio">Portfolio</NavLink>
            </li>
            <li
              className={classnames(
                styles.header__link,
                styles["header__links--pricing"]
              )}
            >
              <NavLink to="/pricing">Pricing</NavLink>
            </li>
            <li
              className={classnames(
                styles.header__link,
                styles["header__links--contact"]
              )}
            >
              <NavLink to="/contactform">Contact</NavLink>
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
          <div>
            {theme === "light" ? (
              <button onClick={toggleDarkTheme}>
                <img src="../public/images/night_light.png" />
              </button>
            ) : (
              <button onClick={toggleLightTheme}>
                <img src="../public/images/day_light.png" />
              </button>
            )}
          </div>
        </div>
      </div>
      <BasketModal isOpen={isCartModalOpen} onClose={handleCloseCartModal} />
    </>
  );
};
