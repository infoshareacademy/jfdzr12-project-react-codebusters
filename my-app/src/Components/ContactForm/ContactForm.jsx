import styles from "./ContactForm.module.css";
import classnames from "classnames";
import { validateEmail } from "../../utils/validationEmail.js";
import { useRef, useState } from "react";

export const ContactForm = () => {
  const [emailMessages, setEmailMessages] = useState([]);
  const inputEmailEl = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const emailValue = inputEmailEl.current.value;

    setEmailMessages(validateEmail(emailValue));
    console.log(emailValue);
  };

  return (
    <div className={classnames(styles["modal"])} id="contact">
      <h2 className={classnames(styles["modal__header"])}>Contact us</h2>
      <form
        action=""
        method="get"
        className={classnames(styles["modal__form"])}
        onSubmit={handleSubmit}
      >
        <label htmlFor="title" className={classnames(styles["form__label"])}>
          Title
        </label>
        <input
          placeholder=""
          type="text"
          id="title"
          name="title"
          className={classnames(
            styles["form__input"],
            styles["form__input--text"]
          )}
          required
        />
        <label htmlFor="email" className={classnames(styles["form__label"])}>
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
            styles["form__input--email"]
          )}
          required
        />
        <ol>
          {emailMessages.map((msg) => (
            <li key={msg}>{msg}</li>
          ))}
        </ol>

        <label htmlFor="message" className={classnames(styles["form__label"])}>
          Message
        </label>
        <textarea
          placeholder=""
          id="message"
          className={classnames(
            styles["form__input"],
            styles["form__input--textarea"]
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
            styles["form__input--submit"]
          )}
        />
      </form>
    </div>
  );
};
