import styles from "./Pricing.module.css";
import classnames from "classnames";
import { PricingPosition } from "./PricingPosition/PricingPosition";

export const Pricing = () => {
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
    <div>
      <div className={styles["pricing__container"]} id="pricing">
        <h1 className={styles["pricing__header"]}>Our pricing</h1>
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
          {/* <div className={styles["pricing__option--single"]}>
    <div className={styles["pricing__content"]}>
      <h3 className={styles["pricing__content-header"]}>Single photo price</h3>
      <div className={styles["pricing__value-container"]}>
        <p>$10</p>
      </div>
      <div className={styles["pricing__description-container"]}>
        <ul className={classnames(styles["pricing__description"], styles["pricing__description-minus"])}>
          <li>Already taken</li>
          <li>No modification</li>
          <li>Single use</li>
        </ul>
      </div>
    </div>
  </div>
  <div className={styles["pricing__option--pack"]}>
    <div className={styles["pricing__content"]}>
      <h3 className={styles["pricing__content-header"]}>Pack photo price</h3>
      <div className={styles["pricing__value-container"]}>
        <p>$200</p>
      </div>
      <div className={styles["pricing__description-container"]}>
        <ul className={styles["pricing__description pricing__description-minus"]}>
          <li>Already taken</li>
          <li>No modification</li>
          <li>Single use</li>
        </ul>
      </div>
    </div>
  </div>
  <div className={styles["pricing__option--custom"]}>
    <div className={styles["pricing__content"]}>
      <h3 className={styles["pricing__content-header"]}>Photo custom price</h3>
      <div className={styles["pricing__value-container"]}>
        <p>Call us</p>
      </div>
      <div className={styles["pricing__description-container"]}>
        <ul className={classnames(styles["pricing__description"], styles["pricing__description-plus"])}>
          <li>Taken or new</li>
          <li>Modifications</li>
          <li>Multi use</li>
        </ul>
      </div>
    </div>
  </div> */}
        </div>
      </div>
    </div>
  );
};
