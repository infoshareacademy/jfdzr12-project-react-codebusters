import styles from "./PricingPosition.module.css";
import classnames from "classnames";

export const PricingPosition = (props) => {
  return (
    <div>
      <div className={styles["pricing__option--single"]}>
        <div className={styles["pricing__content"]}>
          <h3 className={styles["pricing__content-header"]}>{props.title}</h3>
          <div className={styles["pricing__value-container"]}>
            <p>{props.price}</p>
          </div>
          <div className={styles["pricing__description-container"]}>
            <ul
              className={classnames(
                styles["pricing__description"],
                styles["pricing__description-minus"]
              )}
            >
              <li>Already taken</li>
              <li>No modification</li>
              <li>Single use</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
