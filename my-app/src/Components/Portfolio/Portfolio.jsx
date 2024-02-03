import styles from "./Portfolio.module.css";
import portfolioData from "../../../public/photos.json";
import { PortfolioModal } from "../PortfolioModal/PortfolioModal";
import { useState } from "react";

export const Portfolio = () => {
  const [isPortfolioModalOpen, setPortfolioModalOpen] = useState(false);

  const handlePortfolioImageClick = () => {
    setPortfolioModalOpen(true);
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
            <img
              src={photo.url}
              className={styles["portfolio__photo"]}
              data-id={photo.id}
              onClick={handlePortfolioImageClick}
            ></img>
          </div>
        ))}
      </div>
      <PortfolioModal
        isOpen={isPortfolioModalOpen}
        onClose={handleClosePortfolioModal}
      />
    </div>
  );
};
