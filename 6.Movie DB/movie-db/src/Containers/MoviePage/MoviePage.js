import React, { useState, useEffect } from 'react';
import axios from '../../axios-custom';
import './MoviePage.scss';
import queryString from 'query-string';
import Genre from '../../Components/Category/Genre/Genre';

const MoviePage = (props) => {
    const movieId = queryString.parse(props.location.search).id;
    const [movieData, setMovieData] = useState({ genres: [] })

    useEffect(() => {
        axios.get(`movie/${movieId}?&language=en-US`)
            .then(res => setMovieData(res.data))
    }, [movieId]);

    return (
        <main>
            <h3 className="info-heading">GENRE</h3>
            <div className="genres">
                {movieData.genres.map(genre => {
                    return <Genre id={genre.id} name={genre.name} />
                })}
            </div>
        </main>
    );
}

export default MoviePage;
