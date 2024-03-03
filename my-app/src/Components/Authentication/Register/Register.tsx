import styles from "./Register.module.css"
import { ThemeContext } from "../../../providers/theme.tsx";
import { useContext } from "react";
import classnames from "classnames";
import { AuthForm } from "../../structure_components/AuthForm.jsx"
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase-config.js";


export const Register = () => {
    const { theme } = useContext(ThemeContext);
    const handleSubmit = ({ login, password }) => {
        createUserWithEmailAndPassword(auth, login, password)
            .then((e) => console.log(e))
    }
    return (
        <div className={classnames(styles["register__container"], styles[theme])}>
            <h1 className={classnames(styles["register__header"], styles[theme])}>
                Registration page
            </h1>
            <div className={classnames(styles["register__form"], styles[theme])}>
                <AuthForm submitText="Register" handleSubmit={handleSubmit}></AuthForm>
            </div>

        </div>
    );
};