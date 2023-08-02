import React from "react";
import { useHistory } from "react-router-dom";
import "./MovieCard.css";



const MovieCard = ({ isAdmin, movieObj, idx, setIdFun, deleteDataIdx }) => {
    console.log(idx,movieObj);
    const history = useHistory();
    const onMovieClick = value => () => {
    

        setIdFun(idx)
                history.push("./MovieFull");
           
    }
    function navEdit(e) {
        e.preventDefault();
        setIdFun(idx)
                history.push("./MovieEdit")    
    }
    
    function deleteMovie(e) {
        e.preventDefault();
        // console.log(idx);
        deleteDataIdx(idx)
                
            }

    return (
        <div  className="movieCard">

            <img onClick={onMovieClick(movieObj.id)} src={movieObj.poster} style={{width:"100px", height:"150px"}} alt="poster" />
            <p><b>{movieObj.name}</b></p>
            <div style={{display:"flex", marginTop:"0px"}} >
                {isAdmin && <button style={{marginRight:"3px", padding:"5px"}} onClick={navEdit}><b>Edit</b></button>}
                {isAdmin && <button style={{marginLeft:"3px",  padding:"5px"}} onClick={deleteMovie}><b>Delete</b></button>}
            </div>  
        </div>
    );
}

export default MovieCard;