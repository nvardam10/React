import React from 'react'
import "./MovieCard.css";
import { useHistory } from "react-router-dom";

const MovieFull = ({ obj, idx }) => {
    console.log(idx);
    const history = useHistory();
    
    const navToBack = (e) => {
        history.push("./MovieData");
    }

    return (
        <div className='row'>
            <div className='column1'>
                <img src={obj[idx].poster} alt="poster" style={{width:"350px", height:"500px", padding:"30px", shadow: "rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px"}}/>
            </div>
            <div className='column2' >
                <h1>ID:<span>{obj[idx].id}</span></h1> 
                <h1><b>Name:</b> <span>{obj[idx].name}</span></h1>
                <h1>Release Date: <span>{obj[idx].release}</span></h1>
                <h1>Category: <span>{obj[idx].type}</span></h1>
                
                <button className='cancel' onClick={navToBack}><b>Cancel</b></button>
                
            </div>
            
  
        
            
      </div>

  )
}
export default MovieFull