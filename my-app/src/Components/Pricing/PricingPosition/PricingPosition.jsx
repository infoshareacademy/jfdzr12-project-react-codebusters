import styles from "./PricingPosition.module.css";
import classnames from "classnames";
import { ThemeContext } from "../../../providers/theme";
import { useContext } from "react";

export const PricingPosition = (props) => {
  const { theme } = useContext(ThemeContext);

  return (
    <>
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
              {props.description.map((el, index) => {
                const key = `${index}-${el}`;
                return <li key={key}>{el}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
