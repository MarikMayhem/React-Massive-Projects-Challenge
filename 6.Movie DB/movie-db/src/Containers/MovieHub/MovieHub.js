import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-custom';
import './MovieHub.scss';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import SwitchTab from '../../Components/Switchtab/Switchtab';
import SwitchMode from '../SwitchMode/SwitchMode';
import MovieSlider from '../../Components/MovieSlider/MovieSlider';
import PersonsSlider from '../../Components/PersonsSlider/PersonsSlider';
import About from '../../Components/About/About';
import MoviePresentation from '../../Components/MoviePresentation/MoviePresentation';
import { Carousel } from 'react-responsive-carousel';



const MovieHub = (props) => {
    const [popularMovies, setPopularMovies] = useState([])
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [trendingActors, setTrendingActors] = useState([])

    useEffect(() => {
        //Get Top Rated 
        axios.get('movie/popular?&language=en-US&page=1')
            .then(res => setPopularMovies(res.data.results.splice(0, 5)))
        axios.get('movie/top_rated?&language=en-US&page=1')
            .then(res => setTopRatedMovies(res.data.results));
        axios.get('trending/person/week')
            .then(res => setTrendingActors(res.data.results));
    }, [props]);


    return (
        <React.Fragment>
            <header>
                <React.Fragment>
                    <h3 className="info-heading">Popular Movies</h3>
                    <Carousel showThumbs={false} showArrows={true}>
                        {popularMovies.map(movie => <MoviePresentation
                            key={movie.id}
                            id={movie.id}
                            backdrop={movie.backdrop_path}
                            title={movie.original_title} />)}
                    </Carousel>
                </React.Fragment>
                <SwitchTab />
                <SwitchMode />
            </header>
            <main>

                {/*Movie by category*/}
                <MovieSlider visible={props.search} movieList={props.category} />
                {/*Movie by search*/}
                <MovieSlider visible={!props.search} movieList={props.searchInputValues} />
                {/*Trending Persons*/}
                <h3 className="info-heading">Trending Persons this week</h3>
                <PersonsSlider personsList={trendingActors} />
                {/*Movie by top-rated-movies*/}
                <h3 className="info-heading">Top rated Movies</h3>
                <MovieSlider visible={true} movieList={topRatedMovies} />
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


export default connect(mapStateToProps)(React.memo(MovieHub));
