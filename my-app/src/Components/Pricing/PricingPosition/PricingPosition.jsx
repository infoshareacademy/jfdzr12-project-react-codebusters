// import styles from "./PricingPosition.module.css";
// import classnames from "classnames";
// import { ThemeContext } from "../../../providers/theme";
// import { useContext } from "react";

// export const PricingPosition = (props) => {
//   const { theme } = useContext(ThemeContext);

//   return (
//     <>
//       <div className={classnames(styles["pricing__option"], styles[theme])}>
//         <div className={classnames(styles["pricing__content"], styles[theme])}>
//           <h3
//             className={classnames(
//               styles["pricing__content-header"],
//               styles[theme]
//             )}
//           >
//             {props.title}
//           </h3>
//           <div
//             className={classnames(
//               styles["pricing__value-container"],
//               styles[theme]
//             )}
//           >
//             <p>{props.price}</p>
//           </div>
//           <div className={styles["pricing__description-container"]}>
//             <ul
//               className={classnames(
//                 styles["pricing__description"],
//                 styles[theme]
//               )}
//             >
//               {props.description.map((el, index) => {
//                 const key = `${index}-${el}`;
//                 return <li key={key}>{el}</li>;
//               })}
//             </ul>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };
