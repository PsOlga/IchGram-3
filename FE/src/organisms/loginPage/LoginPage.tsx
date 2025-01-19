import s from "./loginPage.module.css"
import phones from "../../assets/phones.svg"
import { LoginForm } from "../../molecules/loginForm/LoginForm"
import { useState, useEffect } from "react"


export const LoginPage = () => {

    const [visible, setVisible] = useState(false);

  useEffect(() => {
    // Устанавливаем задержку для плавного появления
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer); // Очистка таймера при размонтировании
  }, []);

    return (
        <div className={s.loginPage}>
        <div className={s.imageContainer}>
          <img src={phones} 
          alt="phone" 
          className={visible ? s.visible : ''}/>
          </div>
        <div className={s.loginFormBox}>
            <LoginForm/>
            </div>
        </div>
    )
}