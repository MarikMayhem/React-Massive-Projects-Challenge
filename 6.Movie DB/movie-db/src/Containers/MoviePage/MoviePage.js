import React, { useState, useEffect } from 'react';
import axios from '../../axios-custom';
import './MoviePage.scss';
import queryString from 'query-string';
import Genre from '../../Components/Category/Genre/Genre';
import PersonsSlider from '../../Components/PersonsSlider/PersonsSlider';
import MovieSlider from '../../Components/MovieSlider/MovieSlider';
import About from '../../Components/About/About';

const MoviePage = (props) => {
    const movieId = queryString.parse(props.location.search).id;
    const [movieData, setMovieData] = useState({ genres: [] })
    const [movieCredits, setMovieCredits] = useState({})
    const [similarMovies, setSimilarMovies] = useState([])

    useEffect(() => {
        axios.get(`movie/${movieId}?&language=en-US`)
            .then(res => setMovieData(res.data))

        axios.get(`movie/${movieId}/credits?&language=en-US`)
            .then(res => setMovieCredits(res.data))
        axios.get(`movie/${movieId}/similar?&language=en-US&page=1`)
            .then(res => setSimilarMovies(res.data.results))

    }, [movieId]);

    return (
        <main>
            <h3 className="info-heading">GENRE</h3>
            <div className="genres">
                {movieData.genres.map(genre => {
                    return <Genre key={genre.id} id={genre.id} name={genre.name} />
                })}
            </div>
            <h3 className="info-heading">Overview</h3>
            <p className="overview">{movieData.overview}</p>
            <div className="general-data">
                <div className="data-info">
                    <h3 className="info-heading">Release date</h3>
                    <p className="info-description">{movieData.release_date}</p>
                </div>
                <div className="data-info">
                    <h3 className="info-heading">Run time</h3>
                    <p className="info-description">{movieData.runtime}</p>
                </div>
                <div className="data-info">
                    <h3 className="info-heading">Budget</h3>
                    <p className="info-description">{movieData.budget}</p>
                </div>
                <div className="data-info">
                    <h3 className="info-heading">Homepage</h3>
                    <a className="info-description" href={movieData.homepage}>{movieData.homepage}</a>
                </div>
            </div>
            <h3 className="info-heading">Casts</h3>
            <PersonsSlider personsList={movieCredits.cast} infoType="role-name" />
            <h3 className="info-heading">Similar Movies</h3>
            <MovieSlider visible={true} movieList={similarMovies} />
            <About />
        </main>
    );
}

export default MoviePage;
