import styles from "./Pricing.module.css";
import { PricingPosition } from "./PricingPosition/PricingPosition";
import { ThemeContext } from "../../providers/theme";
import { useContext } from "react";
import classnames from "classnames";

export const Pricing = () => {
  const { theme } = useContext(ThemeContext);

  const descriptionSinglePhotos = [
    "Already taken",
    "No modification",
    "Single use",
  ];
  const descriptionPackPhotos = [
    "Already taken",
    "No modification",
    "Single use",
  ];
  const descriptionCustomPhotos = [
    "Taken or new",
    "Modifications",
    "Multi use",
  ];
  return (
    <>
      <div className={classnames(styles["pricing__container"], styles[theme])}>
        <h1 className={classnames(styles["pricing__header"], styles[theme])}>
          Our pricing
        </h1>

        <div className={styles["pricing__content-container"]}>
          <PricingPosition
            title="single photo price"
            price="10$"
            description={descriptionSinglePhotos}
          ></PricingPosition>
          <PricingPosition
            title="pack photo price"
            price="200$"
            description={descriptionPackPhotos}
          ></PricingPosition>
          <PricingPosition
            title="photo custom price"
            price="Call us"
            description={descriptionCustomPhotos}
          ></PricingPosition>
        </div>
      </div>
    </>
  );
};
