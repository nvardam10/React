import React from "react";
import "./Home.css";
import MovieData from "../Movie Card/MovieData";

const Home = ({ isAdmin }) => {
  return (
    <>
      <div className="home">
        <nav>
          <ul>
            <li>
              <a href="#">Popular</a>
            </li>
            <li>
              <a href="#">Theatre</a>
            </li>
            <li>
              <a href="#">Kids</a>
            </li>
            <li>
              <a href="#">Drama</a>
            </li>
            <li>
              <a href="#">Comedy</a>
            </li>
          </ul>
        </nav>
        <form></form>
      </div>
      <div className="contain">
        {console.log(isAdmin)}
        <MovieData isAdmin={isAdmin} />
      </div>
    </>
  );
};

export default Home;
