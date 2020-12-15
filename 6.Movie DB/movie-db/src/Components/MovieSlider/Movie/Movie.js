import React from 'react'
import { Link } from 'react-router-dom';
import './Movie.scss'

const Movie = ({ posterPath, name, rating, id }) => {
    return (

        <div className="movie">
            <Link
                to={{
                    pathname: `/movie`,
                    search: `?id=${id}`
                }}>
                <img className="poster" alt='poster' src={`https://image.tmdb.org/t/p/w500/${posterPath}`} />
            </Link>
            <p className="title">{name}</p>
            <p>Rated: {rating}</p>
        </div >
    );
}

export default Movie;
