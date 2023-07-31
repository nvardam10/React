import React, { useState } from "react";
import MovieCard from './MovieCard';
import { useHistory } from "react-router-dom";
import "./MovieCard.css";

const MovieData = ({ isAdmin,movieObj,setIdFun,deleteDataIdx }) => {
  const history = useHistory();
  const [type, setType] = useState("All");
  const [isPresent, setIsPresent] = useState(false);
  function navAdd(e) {
        e.preventDefault();

                history.push("./MovieAdd")    
  }
  function fiterMovie(str) {
        // e.preventDefault();
    setType(str);
  }

  function isPresentFun(cond) {
    if (cond) {
      setIsPresent(true)
    }
  }

  // let card;
  
  
    // console.log(type)
    return (
      
    <div className="movieData">
      <div className="home">
        <nav>
          <ul>
            <li onClick={()=>fiterMovie("All")} ><a href="#">All</a></li>
            <li onClick={()=>fiterMovie("action")} ><a href="#">Action</a></li>
            <li onClick={()=>fiterMovie("romance")}><a href="#">Romance</a></li>
            <li onClick={()=>fiterMovie("comedy")}><a href="#">Comedy</a></li>
            <li onClick={()=>fiterMovie("horror")}><a href="#">Horror</a></li>
            <li onClick={()=>fiterMovie("sci-fi")}><a href="#">Sci-Fi</a></li>
          </ul>
        </nav>
      </div>
      <div>
        {isAdmin && <h5 className="adde" onClick={navAdd}><u>ADD</u></h5>}
        
      </div>
      <div className="cards">
          {
            type === "All" ?
          movieObj.map((element, index) => {
            return (<MovieCard isAdmin={isAdmin} deleteDataIdx={deleteDataIdx} movieObj={element} idx={index} setIdFun={setIdFun} />);
          }) : movieObj.filter((element) => {
            // isPresentFun(()=>element.type === type)
            
            return element.type === type;

    }).map((element, index) => {
      // console.log(element==null);
      return <MovieCard isAdmin={isAdmin} deleteDataIdx={deleteDataIdx} movieObj={element} idx={index} setIdFun={setIdFun} />
    })
            
          }

          {/* {
            isPresent ? null : <p>No content</p>
          } */}
          
          
      </div>
      
    </div>
    );
  
  
};

export default MovieData;