import React from 'react';
import SwitchTab from '../../Components/Switchtab/Switchtab';
import SwitchMode from '../SwitchMode/SwitchMode';
import MovieSlider from '../../Components/MovieSlider/MovieSlider';
import { connect } from 'react-redux';
import './MovieHub.scss';

const MovieHub = (props) => {
    return (
        <React.Fragment>
            <header>
                <SwitchTab />
                <SwitchMode />
            </header>
            <main>
                <MovieSlider visible={props.search} movieList={props.category} />
                <MovieSlider visible={!props.search} movieList={props.searchInputValues} />
            </main>
        </React.Fragment>
    );
}


const mapStateToProps = state => {
    console.log('statene', state)
    return {
        search: state.search.search,
        category: state.category.moviesListByCategory,
        searchInputValues: state.searchInputValues.movieSearchList
    }
}


export default connect(mapStateToProps)(React.memo(MovieHub));
