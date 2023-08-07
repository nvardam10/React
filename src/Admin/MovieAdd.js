import React, { useState } from 'react';
import "./Movie.css";
import { useHistory } from "react-router-dom";


export const MovieAdd = ({ movieObj,isLogin }) => {
  const history = useHistory();
    
    const [id, setId] = useState('');
    const [poster, setPoster] = useState('');
    const [name, setName] = useState('');
    const [release, setRelease] = useState('');
    const [type, setType] = useState('');

    const [isValidId, setIsValidId] = useState(false);
    const [isValidPoster, setIsValidPoster] = useState(false);
    const [isValidName, setIsValidName] = useState(false);
    const [isValidRelease, setIsValidRelease] = useState(false);
    const [isValidType, setIsValidType] = useState(false);

    

    const validateId = (id) => {
        return id.length >= 1;
    };

    const validatePoster = (poster) => {
        return poster.length >= 1;
    };

    const validateName = (name) => {
        return name.length >= 1;
    };

    const validateRelease = (release) => {
        return release.length >= 1;
    };

    const validateType = (type) => {
        return type.length >= 1;
    };

    const handleIdChange = (e) => {
        const { value } = e.target;
        setId(value);
        setIsValidId(validateId(value));
    };

    const handlePosterChange = (e) => {
        const { value } = e.target;
        setPoster(value);
        setIsValidPoster(validatePoster(value));
    };
    
    const handleNameChange = (e) => {
        const { value } = e.target;
        setName(value);
        setIsValidName(validateName(value));
    };
    
    const handleReleaseChange = (e) => {
        const { value } = e.target;
        setRelease(value);
        setIsValidRelease(validateRelease(value));
    };
    
    const handleTypeChange = (e) => {
        const { value } = e.target;
        setType(value);
        setIsValidType(validateType(value));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(isValidId, isValidName);

        if (isValidPoster && isValidName && isValidRelease && isValidType) {
            // alert('Form submitted successfully!');
            let obj = {};
            obj.id = id;
            obj.poster = poster;
            obj.name = name;
            obj.release = release;
            obj.type = type;
            console.log(obj);
            movieObj(obj);

            history.push("./MovieData")
        }
    }

        const navToBack = (e) => {
        history.push("./MovieData");
    }
    
    
    return (
        <div>
            { isLogin?
                <div className="auth-form" >
                    <form className="add-form" onSubmit={handleSubmit}>

                        <label htmlFor="id"><b>ID:</b></label>
                        <input className='adinput' value={id} min="1" onChange={handleIdChange} type="number" placeholder="Add Id " id="id" name="id" />
                        {!isValidId && <p className="alert">Please enter a id.</p>}

                        <label htmlFor="name"><b>Poster:</b></label>
                        <input className='adinput' value={poster} onChange={handlePosterChange} type="url" placeholder="Add Poster" id="poster" name="poster" />
                        {!isValidPoster && <p className="alert">Please enter a valid email address.</p>}
            
                        <label htmlFor="name"><b>Name:</b></label>
                        <input className='adinput' value={name} onChange={handleNameChange} type="text" placeholder="Add Name" id="name" name="name" />
                        {!isValidName && <p className="alert">Please enter a valid email address.</p>}
            
                        <label htmlFor="release"><b>Release Date:</b></label>
                        <input className='adinput' value={release} onChange={handleReleaseChange} type="date" placeholder="Add Date" id="release" name="release" />
                        {!isValidRelease && <p className="alert">Please enter a valid email address.</p>}
            
                        <label htmlFor="type"><b>Category:</b></label>
                        <select className='adinput' value={type} onChange={handleTypeChange} placeholder="Add type" id="type" name="type">
                            <option value="select">--select--</option>
                            <option value="action">Action</option>
                            <option value="romance">Romance</option>
                            <option value="horror">Horror</option>
                            <option value="comedy">Comedy</option>
                            <option value="sci-fi">Sci-fi</option>
                        </select>
                        {!isValidType && <p className="alert">Please enter a valid email address.</p>}

                        <div style={{ display: "flex", padding: "10px", justifyContent: "space-evenly", width: "100%" }}>
                            <button className='add' type="submit"><b>Add</b></button>
                            <button onClick={navToBack} className='cancel'><b>Cancel</b></button>
                        </div>
                
                    </form>

                </div>: (history.push("./Login"))
            }</div>
    );

}





