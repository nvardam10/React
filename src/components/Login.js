import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { loggedInUser } from "../Helper/userSlide";

export const Login = ({ onAdminLogin, onLogin }) => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValid, setIsValid] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  const users = useSelector((state) => state.auth.users);

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => password.length >= 6;

  const handleEmailChange = (e) => {
    const { value } = e.target;
    setEmail(value);
    setIsValidEmail(validateEmail(value));
  };

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPass(value);
    setIsValidPassword(validatePassword(value));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isValidEmail && isValidPassword) {
      if (email === "admin@gmail.com" && pass === "Admin@123") {
        onAdminLogin(true);
        onLogin(true);
        dispatch(loggedInUser("admin"));
        history.push("./MovieData");
      } else if (!users.hasOwnProperty(email) || users[email].password !== pass)
        setIsValid(true);
      else {
        onAdminLogin(false);
        onLogin(true);
        dispatch(loggedInUser("user"));
        history.push("/MovieData");
      }
    }
  };

  const navToRegister = (e) => history.push("./Register");

  return (
    <div className="auth-form">
      <h2>Login</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label htmlFor="email">Email:</label>
        <input
          className="maininput"
          value={email}
          onChange={handleEmailChange}
          type="email"
          placeholder="Enter your email"
          id="email"
          name="email"
        />
        {!isValidEmail && (
          <p className="alert">Please enter a valid email address.</p>
        )}

        <label htmlFor="password">Password:</label>
        <input
          className="maininput"
          value={pass}
          onChange={handlePasswordChange}
          type="password"
          placeholder="Enter your password"
          name="password"
        />
        {!isValidPassword && (
          <p className="alert">Password must be at least 6 characters.</p>
        )}
        {isValid && (
          <p className="alert">Either email or password is incorrect</p>
        )}

        <div>
          <button type="submit">
            <b>Login</b>
          </button>
        </div>
      </form>
      <button className="link-btn" onClick={navToRegister}>
        Don't have an account? Register here
      </button>
    </div>
  );
};
