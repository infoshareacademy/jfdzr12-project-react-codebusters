import styles from "./Portfolio.module.css";
import portfolioData from "../../../public/photos.json";
import { PortfolioModal } from "../PortfolioModal/PortfolioModal";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { Outlet } from "react-router-dom";

// onClick={() => { setImageId(photo.id) }}



export const Portfolio = () => {
  const [isPortfolioModalOpen, setPortfolioModalOpen] = useState(false);
  const [imageId, setImageId] = useState(null);
  const handlePortfolioImageClick = () => {
    setPortfolioModalOpen(true);
    setImageId(photo.id)
  };

  const handleClosePortfolioModal = () => {
    setPortfolioModalOpen(false);
  };

  return (
    <div className={styles["portfolio__container"]} id="portfolio">
      <h1 className={styles["portfolio__header"]}>Our portfolio</h1>
      <div className={styles["portfolio"]}>
        <h3 className={styles["portfolio__info"]}>
          We are experienced in taking photos for all kinds of circumstances.
          <br />
          Below is a summary of our extensive portfolio, with us you will always
          look good!
        </h3>
      </div>
      <div className={styles["portfolio__photos"]}>
        {portfolioData.photos.map((photo) => (
          <div key={photo.id} className={styles["portfolio__items"]}>
            <NavLink to={`/portfolio/:${photo.id}`}> <img
              src={photo.url}
              className={styles["portfolio__photo"]}
              data-id={photo.id}
              onClick={handlePortfolioImageClick}
            /> </NavLink>
            <Outlet context={imageId} />

          </div>
        ))}
      </div>
      <PortfolioModal
        isOpen={isPortfolioModalOpen}
        onClose={handleClosePortfolioModal}
      />
    </div >
  );
};
