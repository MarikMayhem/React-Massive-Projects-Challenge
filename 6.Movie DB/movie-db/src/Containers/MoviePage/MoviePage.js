import React, { useState, useEffect } from 'react';
import axios from '../../axios-custom';
import './MoviePage.scss';
import queryString from 'query-string';

const MoviePage = (props) => {
    const movieId = queryString.parse(props.location.search).id;
    const [movieData, setMovieData] = useState({})

    useEffect(() => {
        // axios get movie by id...
        axios.get(`movie/${movieId}?&language=en-US`)
            .then(res => console.log(res.data))
    }, [movieId]);

    return (
        <section className="movie-page">
            <p>Movie PAGE </p>
        </section>
    );
}

export default MoviePage;
