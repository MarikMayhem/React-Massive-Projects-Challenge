import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from '../../axios-custom';
import './MovieHub.scss';
import SwitchTab from '../../Components/Switchtab/Switchtab';
import SwitchMode from '../SwitchMode/SwitchMode';
import MovieSlider from '../../Components/MovieSlider/MovieSlider';
import PersonsSlider from '../../Components/PersonsSlider/PersonsSlider';
import About from '../../Components/About/About';


const MovieHub = (props) => {
    const [topRatedMovies, setTopRatedMovies] = useState([])
    const [trendingActors, setTrendingActors] = useState([])

    useEffect(() => {
        //Get Top Rated 
        axios.get('movie/top_rated?&language=en-US&page=1')
            .then(res => setTopRatedMovies(res.data.results));
        axios.get('trending/person/week')
            .then(res => setTrendingActors(res.data.results));
    }, []);

    return (
        <React.Fragment>
            <header>
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
