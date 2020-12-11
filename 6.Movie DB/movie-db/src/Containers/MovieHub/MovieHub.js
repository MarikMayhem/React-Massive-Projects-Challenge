import React from 'react';
import SwitchTab from '../../Components/Switchtab/Switchtab';
import Sort from '../SwitchMode/SwitchMode';
import MovieSlider from '../../Components/MovieSlider/MovieSlider';
import { connect } from 'react-redux';
import './MovieHub.scss';

const MovieHub = (props) => {
    return (
        <React.Fragment>
            <header>
                <SwitchTab />
                <Sort />
            </header>
            <main>
                {props.search ? <MovieSlider movieList={props.category} />
                    : <MovieSlider movieList={props.searchInput} />}
            </main>
        </React.Fragment>
    );
}


const mapStateToProps = state => {
    return {
        search: state.search.search,
        category: state.category.moviesListByCategory,
        searchInput: state.searchInput.movieSearchList
    }
}


export default connect(mapStateToProps)(MovieHub);
