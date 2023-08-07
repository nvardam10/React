import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { registerUser } from "../Helper/userSlide";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmpass, setConfirmPass] = useState("");

  const [isValidName, setIsValidName] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isValidConfirmPassword, setIsValidConfirmPassword] = useState(true);

  const history = useHistory();
  const dispatch = useDispatch();

  const validateName = (name) => name.length >= 1;

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => password.length >= 6;
  const validateConfirmPassword = (confirmpassword) => confirmpassword === pass;

  const handleNameChange = (e) => {
    const { value } = e.target;
    setName(value);
    setIsValidName(validateName(value));
  };

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

  const handleConfirmPasswordChange = (e) => {
    const { value } = e.target;
    setConfirmPass(value);
    setIsValidConfirmPassword(validateConfirmPassword(value));
  };

  const navToLogin = (e) => history.push("./Login");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(isValidConfirmPassword);

    if (
      isValidName &&
      isValidEmail &&
      isValidPassword &&
      isValidConfirmPassword
    ) {
      let obj = {
        name: name,
        email: email,
        password: pass,
      };
      dispatch(registerUser({ email, user: obj }));
      history.push("./Login");
    }
  };

  return (
    <div className="auth-form">
      <h1>Register</h1>
      <form className="register-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Full name:</label>
        <input
          className="maininput"
          value={name}
          onChange={handleNameChange}
          type="name"
          placeholder="Enter your full name"
          id="name"
          name="name"
        />
        {!isValidName && <p className="alert">Please enter your name.</p>}

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
          <p className="alert">Password must be at least 6 characters long.</p>
        )}

        <label htmlFor="confirmpassword">Confirm Password:</label>
        <input
          className="maininput"
          value={confirmpass}
          onChange={handleConfirmPasswordChange}
          type="password"
          placeholder="Enter your password"
          name="confirmpassword"
        />
        {!isValidConfirmPassword && (
          <p className="alert">Password must be at least 6 characters long.</p>
        )}

        <div>
          <button type="submit">
            <b>Register</b>
          </button>
        </div>
      </form>
      <button className="link-btn" onClick={navToLogin}>
        Already have an account? Login here
      </button>
    </div>
  );
};
