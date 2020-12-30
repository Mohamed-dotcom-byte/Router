import React, {useState} from 'react'
import MovieCard from './MovieCard'
import AddMovie from './AddMovie';
import card from "./card.css";
const MovieList = ({movies, addMovie}) => {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
    return (
       
        <div>
            <button className="bttn" onClick={handleShow}>Add Movie</button>
            <AddMovie handleClose={handleClose} show={show} addMovie={addMovie}/>
            <div style={{ display:"flex", flexWrap:"wrap"}}>
            {movies.map((el,i)=>(
                <MovieCard movie={el} key={i}/>
            ))}
        </div>
        </div>
    );
};

export default MovieList
