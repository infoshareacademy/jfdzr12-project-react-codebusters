import styles from "./Header.module.css";
import classnames from "classnames";
import React, { useContext, useState } from "react";
import { BasketModal } from "../BasketModal/BasketModal";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../providers/theme";

export const Header = () => {
  const [isCartModalOpen, setCartModalOpen] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);

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

          <select
            onChange={(e) => setTheme(e.target.value)}
            defaultValue={theme}
          >
            <option>light</option>
            <option>dark</option>
          </select>
        </div>
      </div>
      <BasketModal isOpen={isCartModalOpen} onClose={handleCloseCartModal} />
    </>
  );
};
