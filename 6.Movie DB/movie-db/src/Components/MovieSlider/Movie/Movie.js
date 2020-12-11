import React from 'react'
import './Movie.scss'

const Movie = ({ posterPath, name, rating }) => {
    return (
        <div>
            <img className="poster" alt='poster' src={`https://image.tmdb.org/t/p/w500/${posterPath}`} />
            <p>{name}</p>
            <p>Rated: {rating}</p>
        </div>
    );
}

export default Movie;
