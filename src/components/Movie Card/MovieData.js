import React, { useState } from "react";
import MovieCard from "./MovieCard";
import { useHistory } from "react-router-dom";
import "./MovieCard.css";
// import "./Home.css";

const MovieData = ({ isAdmin, isLogin, movieObj, setIdFun, deleteDataIdx }) => {
  const history = useHistory();
  const [type, setType] = useState("All");
  const [pid, setPid] = useState(0);

  function navAdd(e) {
    e.preventDefault();

    history.push("./MovieAdd");
  }
  function fiterMovie(str) {
    // e.preventDefault();
    setType(str);
  }

  function increaseId() {
    if (movieObj.length > pid + 6) {
      setPid(pid + 6);
    }
  }

  function decreaseId() {
    if (0 <= pid - 6) {
      setPid(pid - 6);
    }
  }

  return (
    <div>
      {isLogin ? (
        <div className="movieData">
          <div className="home">
            <nav>
              <ul>
                <li onClick={() => fiterMovie("All")}>
                  <a href="#">All</a>
                </li>
                <li onClick={() => fiterMovie("action")}>
                  <a href="#">Action</a>
                </li>
                <li onClick={() => fiterMovie("romance")}>
                  <a href="#">Romance</a>
                </li>
                <li onClick={() => fiterMovie("comedy")}>
                  <a href="#">Comedy</a>
                </li>
                <li onClick={() => fiterMovie("horror")}>
                  <a href="#">Horror</a>
                </li>
                <li onClick={() => fiterMovie("sci-fi")}>
                  <a href="#">Sci-Fi</a>
                </li>
              </ul>
            </nav>
          </div>
          <div>
            {isAdmin && (
              <h3 className="adde" onClick={navAdd}>
                <u>ADD</u>
              </h3>
            )}
          </div>
          <div className="cards">
            {type === "All"
              ? movieObj.slice(pid, pid + 6).map((element) => {
                  return (
                    <MovieCard
                      isAdmin={isAdmin}
                      deleteDataIdx={deleteDataIdx}
                      movieObj={element}
                      idx={movieObj.indexOf(element)}
                      setIdFun={setIdFun}
                    />
                  );
                })
              : movieObj
                  .filter((element) => {
                    // isPresentFun(()=>element.type === type)

                    return element.type === type;
                  })
                  .slice(pid, pid + 6)
                  .map((element) => {
                    // console.log(element==null);
                    return (
                      <MovieCard
                        isAdmin={isAdmin}
                        deleteDataIdx={deleteDataIdx}
                        movieObj={element}
                        idx={movieObj.indexOf(element)}
                        setIdFun={setIdFun}
                      />
                    );
                  })}
          </div>
          <div className="page">
            <h4>{"<"}</h4>
            <h4
              style={{ margin: "20px", cursor: "pointer" }}
              onClick={decreaseId}
            >
              <u>Pevious</u>
            </h4>
            <h4
              style={{ margin: "20px", cursor: "pointer" }}
              onClick={increaseId}
            >
              <u>Next</u>
            </h4>
            <h4>{">"}</h4>
          </div>
        </div>
      ) : (
        history.push("./Login")
      )}
    </div>
  );
};

export default MovieData;
