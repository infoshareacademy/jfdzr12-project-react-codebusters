import { useContext, useState } from "react";
import { ThemeContext } from "../../providers/theme";
import styles from "./AuthForm.module.css";

// eslint-disable-next-line react/prop-types
export const AuthForm = ({
  submitText,
  isPasswordHidden = false,
  handleSubmit,
}) => {
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const { theme } = useContext(ThemeContext);

  const onSubmit = (e) => {
    e.preventDefault();
    return handleSubmit({ login, password });
  };
  return (
    <form
      onSubmit={onSubmit}
      className={`${styles["modal__form"]} ${styles[theme]}`}
    >
      <div>
        <label htmlFor="email">Login</label>
        <input
          type="email"
          name="email"
          id="email"
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
      </div>
      {!isPasswordHidden && (
        <div>
          <label htmlFor="password">Haslo</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      )}
      <button type="submit">{submitText}</button>
    </form>
  );
};
