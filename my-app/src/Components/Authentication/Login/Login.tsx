import styles from "./Login.module.css"
import { ThemeContext } from "../../../providers/theme.tsx";
import { useContext } from "react";
import classnames from "classnames";
import { AuthForm } from "../../structure_components/AuthForm.jsx"
import { useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../../firebase-config.js";


export const Login = () => {
    const { theme } = useContext(ThemeContext);
    const navigate = useNavigate()
    const handleSubmit = ({ login, password }) => {
        signInWithEmailAndPassword(auth, login, password)
            .then((e) => console.log(e))
            .then(() => navigate("/"))
    }
    return (
        <div className={classnames(styles["login__container"], styles[theme])}>
            <h1 className={classnames(styles["login__header"], styles[theme])}>
                Login page
            </h1>
            <div className={classnames(styles["login__form"], styles[theme])}>

                <AuthForm submitText="Login" handleSubmit={handleSubmit}></AuthForm>
            </div>

        </div>
    );
};
