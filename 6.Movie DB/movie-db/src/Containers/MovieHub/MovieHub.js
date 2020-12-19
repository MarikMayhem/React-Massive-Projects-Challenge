import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import * as actionTypes from '../../Store/Actions/actionTypes';
import axios from '../../axios-custom';
import './MovieHub.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import SwitchTab from '../../Components/Switchtab/Switchtab';
import SwitchMode from '../../Components/SwitchMode/SwitchMode';
import MovieSlider from '../../Components/MovieSlider/MovieSlider';
import PersonsSlider from '../../Components/PersonsSlider/PersonsSlider';
import About from '../../Components/About/About';
import MoviePresentation from '../../Components/MoviePresentation/MoviePresentation';
import { Carousel } from 'react-responsive-carousel';



const MovieHub = (props) => {
    const [popularMovies, setPopularMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [trendingActors, setTrendingActors] = useState([])
    const [defaultTab, setDefaultTab] = useState('search')
    const [genres, setGenres] = useState([])

    useEffect(() => {
        // Get Top Rated 
        (async function fetchMovieTrailers() {
            let getPopularMovies = await axios.get('movie/popular?&language=en-US&page=1');
            let movies = getPopularMovies.data.results.splice(0, 5)
            //Get their youtube links
            for (let [i, movie] of movies.entries()) {
                let getTrailerId = await axios.get(`movie/${movie.id}/videos?&language=en-US`)
                movies[i] = { ...movie, trailerId: getTrailerId.data.results[0].key }
            }
            setPopularMovies(movies);
        })();

        axios.get('movie/top_rated?&language=en-US&page=1')
            .then(res => setTopRatedMovies(res.data.results));
        axios.get('trending/person/week')
            .then(res => setTrendingActors(res.data.results));
        axios.get('genre/movie/list?&language=en-US')
            .then(res => setGenres(res.data.genres))
    }, []);

    const fetchSelectedGenreHandler = (genreId) => {
        axios.get(`discover/movie?&language=en-US&sort_by=popularity.desc&page=1&with_genres=${genreId}
        `).then(res => props.onCategorySelection(res))
    }

    const changeSearchByCategoryHandler = (e) => {
        e.preventDefault()
        if (defaultTab !== e.target.name) {
            props.onCategoryChange()
            setDefaultTab(e.target.name)
        }
    }

    const filterFourMoviesHandler = (movieList) => {
        // let fourMovies = movieList.splice(0, 4);

        // return fourMovies
    }

    return (
        <React.Fragment>
            <header>
                <h3 className="info-heading">Popular Movies</h3>
                <Carousel showThumbs={false} showArrows={true}>
                    {popularMovies.map((movie, idx) =>
                        <MoviePresentation
                            key={movie.id}
                            backdrop={movie.backdrop_path}
                            title={movie.original_title}
                            youtubeLink={movie.trailerId} />)}
                </Carousel>

                <SwitchTab search={props.search} changeSearchCategory={changeSearchByCategoryHandler} />

                <SwitchMode
                    search={props.search}
                    allMovieGenres={genres}
                    fetchSelectedGenre={fetchSelectedGenreHandler} />
            </header>
            <main>
                {/*Movie by category*/}


                <MovieSlider visible={props.search} fourMoviesHandler={() => filterFourMoviesHandler(props.category)} movieList={props.category} />
                {/*Movie by search*/}
                <MovieSlider visible={!props.search} fourMoviesHandler={() => filterFourMoviesHandler(props.searchInputValues)} movieList={props.searchInputValues} />


                {/*Trending Persons*/}
                <h3 className="info-heading">Trending Persons this week</h3>
                <PersonsSlider personsList={trendingActors} />
                {/*Movie by top-rated-movies*/}
                <h3 className="info-heading">Top rated Movies</h3>
                <MovieSlider visible={true} fourMoviesHandler={() => filterFourMoviesHandler(topRatedMovies)} movieList={topRatedMovies} />
                {/*About me*/}
                <About />
            </main>
        </React.Fragment>
    );
}


const mapStateToProps = state => {
    return {
        search: state.search.search,
        category: state.category.moviesListByCategory,
        searchInputValues: state.searchInputValues.movieSearchList
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onCategorySelection: (category) => dispatch({ type: actionTypes.CATEGORY_CHOSEN, payload: category }),
        onCategoryChange: () => dispatch({ type: actionTypes.CHANGE_SEARCH_CATEGORY })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(React.memo(MovieHub));
