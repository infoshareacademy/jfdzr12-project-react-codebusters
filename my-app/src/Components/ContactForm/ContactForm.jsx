import styles from "./ContactForm.module.css";
import classnames from "classnames";
import { validateEmail } from "../../utils/validationEmail.js";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "../../providers/theme.tsx";

export const ContactForm = () => {
  const [emailMessage, setEmailMessage] = useState("");
  const inputEmailEl = useRef(null);
  const { theme } = useContext(ThemeContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = inputEmailEl.current.value;

    setEmailMessage(validateEmail(emailValue));
    console.log(emailValue);
  };

  return (
    <div
      className={classnames(styles["contact-form__container"], styles[theme])}
    >
      <h1 className={classnames(styles["modal__header"], styles[theme])}>
        Contact us
      </h1>
      <div className={classnames(styles["modal"])} id="contact">
        <form
          action=""
          method="get"
          className={classnames(styles["modal__form"])}
          onSubmit={handleSubmit}
        >
          <label
            htmlFor="title"
            className={classnames(styles["form__label"], styles[theme])}
          >
            Title
          </label>
          <input
            placeholder=""
            type="text"
            id="title"
            name="title"
            className={classnames(
              styles["form__input"],
              styles["form__input--text"],
              styles[theme]
            )}
            required
          />
          <label
            htmlFor="email"
            className={classnames(styles["form__label"], styles[theme])}
          >
            Email
          </label>
          <input
            ref={inputEmailEl}
            placeholder=""
            type="email"
            id="email"
            name="email"
            className={classnames(
              styles["form__input"],
              styles["form__input--email"],
              styles[theme]
            )}
            required
          />
          <p className={classnames(styles["form__error-message"])}>
            {emailMessage}
          </p>
          <label
            htmlFor="message"
            className={classnames(styles["form__label"], styles[theme])}
          >
            Message
          </label>
          <textarea
            placeholder=""
            id="message"
            className={classnames(
              styles["form__input"],
              styles["form__input--textarea"],
              styles[theme]
            )}
            minLength="20"
            name="message"
            rows="4"
            cols="50"
            required
          ></textarea>
          <input
            type="submit"
            value="Send"
            className={classnames(
              styles["form__input"],
              styles["form__input--submit"],
              styles[theme]
            )}
          />
        </form>
      </div>
    </div>
  );
};
