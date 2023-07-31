import React, {  useState } from 'react';
import "./Movie.css";
import { useHistory } from "react-router-dom";

// import Add button

export const MovieEdit = ({ movieObj ,obj,idx}) => {
    const [id, setId] = useState(obj[idx].id);
    const [poster, setPoster] = useState(obj[idx].poster);
    const [name, setName] = useState(obj[idx].name);
    const [release, setRelease] = useState(obj[idx].release);
    const [type, setType] = useState(obj[idx].type);
    // const [newobj, setNewObj] = useState(obj);

    const history = useHistory();


    const [isValidId, setIsValidId] = useState(true);
    const [isValidPoster, setIsValidPoster] = useState(true);
    const [isValidName, setIsValidName] = useState(true);
    const [isValidRelease, setIsValidRelease] = useState(true);
    const [isValidType, setIsValidType] = useState(true);
    console.log(movieObj,obj,idx);
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
        console.log(value)
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

        if (isValidId && isValidPoster && isValidName && isValidRelease && isValidType) {
            // alert('Form submitted successfully!');
            let newObj = {};
            newObj.id = id;
            newObj.poster = poster;
            newObj.name = name;
            newObj.release = release;
            newObj.type = type;
            movieObj(newObj,idx);

            history.push("./MovieData")
        }
    }
    
        const navToBack = (e) => {
        history.push("./MovieData");
    }
    
    return (
        <div className="auth-form" >
            <form className="add-form" onSubmit={handleSubmit}>
                <label  htmlFor="id">Id:</label>
                <input className='adinput' value={id} onChange={handleIdChange} type="number"  id="id" name="id" disabled/>

                <label htmlFor="poter">Poster:</label>
                <input className='adinput' value={poster} onChange={handlePosterChange} type="url" placeholder="Add Poster" id="poster" name="poster" />
                {!isValidPoster && <p className="alert">Please enter a valid url.</p>}
            
                <label  htmlFor="name">Name:</label>
                <input className='adinput' value={name} onChange={handleNameChange} type="text" placeholder="Add Name" id="name" name="name" />
                {!isValidName && <p className="alert">Please enter a valid name.</p>}
            
                <label htmlFor="release">Release Date:</label>
                <input className='adinput' value={release} onChange={handleReleaseChange} type="date" placeholder="Add Date" id="release" name="release" />
                {!isValidRelease && <p className="alert">Please enter a valid release date.</p>}
            
                <label htmlFor="type">Category:</label>
                <select className='adinput' value={type} type="name" onChange={handleTypeChange} placeholder="Add type" id="type" name="type">
                    <option value="action">Action</option>
                    <option value="romance">Romance</option>
                    <option value="horror">Horror</option>
                    <option value="comedy">Comedy</option>
                    <option value="sci-fi">Sci-fi</option>
                </select> 
                {!isValidType && <p className="alert">Please enter a valid category.</p>}

                <button className="edit" type="submit"><b>Edit</b></button>
                <button onClick={navToBack} className='cancel'><b>Cancel</b></button>
            </form>

        </div>


            
    );

}





