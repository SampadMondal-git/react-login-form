import React, { useState } from "react";
import './LoginSignup.css';

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {

    const [isLogin, setIsLogin] = useState("Sign Up");

    return (
        <div className="container">
            <div className="header">
                <h1>{isLogin}</h1>
            </div>

            <div className="underline"></div>

            <div className="inputs">

                {isLogin === "Sign Up" ? <div className="input">
                    <img src={user_icon} alt="" />
                    <input type="text" placeholder="Username" />
                </div> : <div></div>}

                <div className="input">
                    <img src={email_icon} alt="" />
                    <input type="email" placeholder="Email" />
                </div>

                <div className="input">
                    <img src={password_icon} alt="" />
                    <input type="password" placeholder="Password" />
                </div>
            </div>

            {isLogin === "Sign Up" ? <div className="forgot-password">Forgot password?<span> Click here</span></div> : <div></div>}

            <div className="submit">
                <div className={isLogin === "Sign Up" ? "btn" : "btn inactive"} onClick={() => setIsLogin("Sign Up")}>Sign Up</div>
                <div className={isLogin === "Login" ? "btn" : "btn inactive"} onClick={() => setIsLogin("Login")}>Login</div>
            </div>
        </div>
    );
};

export default LoginSignup;