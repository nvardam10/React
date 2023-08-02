import React from "react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import "./Header.css";
import { useDispatch, useSelector } from "react-redux";
import {loggedInUser} from "../../Helper/userSlide"

const Header = ({onLogin}) => {
  const history = useHistory();
  const user = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  const navToRegister = (e) => {
    e.preventDefault();
    onLogin(false);
    dispatch(loggedInUser(null))
        history.push("./Login");
    }
  return (
    <div className="header">
      <Link to="/MovieData">
        <div className="logo">Movie  Flix . com</div>
      </Link>
      {user != null && <div>
        <a style={{cursor: "pointer"}} onClick={navToRegister} href="#"><b>Log out</b></a>
      </div>}
    </div>
  );
};

export default Header;