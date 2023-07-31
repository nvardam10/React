import React from "react";
import { useHistory } from "react-router-dom";
import "./MovieCard.css";



const MovieCard = ({ isAdmin,movieObj,idx ,setIdFun,deleteDataIdx}) => {
    const history = useHistory();
    const onMovieClick = value => () => {
    

        setIdFun(idx)
                history.push("./MovieFull");
           
    }
    function navEdit(e) {
        e.preventDefault();
        // console.log(idx);
        setIdFun(idx)
                history.push("./MovieEdit")    
    }
    
    function deleteMovie(e) {
        e.preventDefault();
        // console.log(idx);
        deleteDataIdx(idx)
                // history.push("./MovieEdit")    
            }

    return (
        <div  className="movieCard">

            <img onClick={onMovieClick(movieObj.id)} src={movieObj.poster} style={{width:"100px"}} alt="poster" />
            <p><b>{movieObj.name}</b></p>
            
            {isAdmin && <button onClick={navEdit}><b>Edit</b></button>}
            {isAdmin && <button onClick={deleteMovie}><b>Delete</b></button>}
            {/* {console.log(movieObj)} */}
            
        </div>
    );
}

export default MovieCard;