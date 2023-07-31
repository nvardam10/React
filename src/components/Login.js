import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux";

export const Login = ({onAdminLogin}) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [isValidEmail, setIsValidEmail] = useState(true);
    const [isValidPassword, setIsValidPassword] = useState(true);

    const [isValid, setIsValid] = useState(false);

    const history = useHistory();
    const users = useSelector((state) => state.auth.users);
    // console.log(users)
    // const [userData, setUserData] = useState([]);

    function userDataHandler() {
        // setUserData((data) =>[...data,userDetails]);
    }
    

    const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
    };

    const validatePassword = (password) => {
    return password.length >= 6;
    };
    
    const handleEmailChange = (e) => {
        const { value } = e.target;
        setEmail(value);
        // console.log(validateEmail(value))
        setIsValidEmail(validateEmail(value));
    };

    const handlePasswordChange = (e) => {
        const { value } = e.target;
        setPass(value);
        setIsValidPassword(validatePassword(value));
    };

    // const resetForm = () => {
    //     email = "";
    //     pass = "";
    // }
    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(email);
        

        if (isValidEmail && isValidPassword) {
            if (email === "admin@gmail.com" && pass === "Admin@123") {
                onAdminLogin(true);
                history.push("./MovieData");
            }
            else if (!users.hasOwnProperty(email) || users[email].password != pass) {
                setIsValid(true);
            }
            else {
                onAdminLogin(false);
                history.push("/MovieData");
            }
        }
        
    };

    

    const navToRegister = (e) => {
        history.push("./Register");
    }

    return (
        <div className="auth-form">
            <h2>Login</h2>
            <form className="login-form" onSubmit={ handleSubmit}>
            <label  htmlFor="email">Email:</label>
            <input className="maininput" value={email} onChange={handleEmailChange} type="email" placeholder="Enter your email" id="email" name="email" />
            {!isValidEmail && <p className="alert">Please enter a valid email address.</p>}
            <label htmlFor="password">Password:</label>
            <input className="maininput" value={pass} onChange={handlePasswordChange} type="password" placeholder="Enter your password" name="password" />
                {!isValidPassword && <p className="alert">Password must be at least 6 characters long.</p>}
                {isValid && <p className="alert">Either email or password is incorrect</p>}
                <div>
                    <button type="submit"><b>Login</b></button>

                </div>
            
            </form>
            <button className="link-btn" onClick={navToRegister}>Don't have an account? Register here</button>
        </div>

    )
}

