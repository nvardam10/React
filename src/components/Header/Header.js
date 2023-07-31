import React from "react";
import { Link } from "react-router-dom";
import user from "../../images/user.png";
import { useHistory } from "react-router-dom";
import "./Header.css";

const Header = () => {
  const history = useHistory();
  const navToRegister = (e) => {
        e.preventDefault();
        
        history.push("./Login");
    }
  return (
    <div className="header">
      <Link to="/MovieData">
        <div className="logo">Movie  Flix . com</div>
      </Link>
      <div>
        <a onClick={navToRegister} href="#">Log out</a>
      </div>
    </div>
  );
};

export default Header;