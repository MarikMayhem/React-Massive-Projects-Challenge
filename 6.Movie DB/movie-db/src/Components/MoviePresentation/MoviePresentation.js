
import React, { useState, useEffect } from 'react';
import './MoviePresentation.scss'
import axios from '../../axios-custom';

const MoviePresentation = ({ id, backdrop }) => {
    const [movieTrailerLink, setMovieTrailerLink] = useState('');
    const trailerIframe = <iframe title="trailer" width="560" height="315" src={`https://www.youtube.com/embed/${movieTrailerLink}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

    useEffect(() => {
        axios.get(`movie/${id}/videos?&language=en-US`)
            .then(res => setMovieTrailerLink(res.data.results[0].key))
    }, [id])

    return (
        <section className="movie-presentation">
            <img className="movie-backdrop"
                src={`https://image.tmdb.org/t/p/original/${backdrop}`}
                alt="background" />
        </section>
    );
}

export default MoviePresentation;
