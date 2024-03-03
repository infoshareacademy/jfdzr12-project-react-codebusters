import styles from "./Header.module.css";
import classnames from "classnames";
import React, { useContext, useState } from "react";
import { BasketModal } from "../BasketModal/BasketModal";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../../providers/theme.tsx";
import { signOut } from "firebase/auth";
import { auth } from "../../../firebase-config.js";

export const Header = ({ setUser, user }) => {
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
      <div className={`${styles["header__container"]} ${styles[theme]}`}>
        <div className={styles["header__image-border-container"]}>
          <div className={styles["header__image-container"]}>
            <NavLink to="/" className={styles["header__image-link"]}>
              <img
                className={styles["header__image"]}
                src="../public/images/logo.png"
              />
            </NavLink>
          </div>
        </div>
        <div className={styles["header__links-container"]}>
          <ul className={styles["header__links"]}>
            {user && (
              <li
                className={classnames(
                  styles.header__link,
                  styles["header__links--examples"],
                  styles[theme]
                )}
              >
                <NavLink to="/portfolio">Portfolio</NavLink>
              </li>
            )}
            {user && (
              <li
                className={classnames(
                  styles.header__link,
                  styles["header__links--pricing"]
                )}
              >
                <NavLink to="/pricing">Pricing</NavLink>
              </li>
            )}
            <li
              className={classnames(
                styles.header__link,
                styles["header__links--contact"]
              )}
            >
              <NavLink to="/contactform">Contact</NavLink>
            </li>
            {user && (
              <li
                className={classnames(
                  styles.header__link,
                  styles["header__links--basket"]
                )}
                // onClick={handleCartClick}
              >
                <NavLink to="/basket">Basket</NavLink>
                {/* Basket */}
              </li>
            )}
            {!user && (
              <li
                className={classnames(
                  styles.header__link,
                  styles["header__links--contact"]
                )}
              >
                <NavLink to="/login">Sign in</NavLink>
              </li>
            )}

            {!user && (
              <li
                className={classnames(
                  styles.header__link,
                  styles["header__links--contact"]
                )}
              >
                <NavLink to="/register">Sign up</NavLink>
              </li>
            )}
            {user && (
              <li
                className={classnames(
                  styles.header__link,
                  styles["header__links--contact"]
                )}
              >
                <div
                  onClick={() => {
                    signOut(auth);
                  }}
                >
                  Sign out
                </div>
              </li>
            )}
          </ul>
        </div>
        <div className={styles["header__theme-buttons-container"]}>
          {theme === "light" ? (
            <button
              className={`${styles["header__theme-button"]} ${styles[theme]}`}
              onClick={toggleDarkTheme}
            >
              <img src="../public/images/night_light.png" />
            </button>
          ) : (
            <button
              className={`${styles["header__theme-button"]} ${styles[theme]}`}
              onClick={toggleLightTheme}
            >
              <img src="../public/images/day_light.png" />
            </button>
          )}
        </div>
      </div>
      {/* <BasketModal
        isOpen={isCartModalOpen}
        onClose={handleCloseCartModal}
        user={user}
      /> */}
    </>
  );
};
