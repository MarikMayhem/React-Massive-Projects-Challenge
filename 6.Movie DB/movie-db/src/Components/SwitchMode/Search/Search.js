import React, { useEffect, useState } from 'react';
import './Search.scss'
import { storeMovieSearchResult } from '../../../Store/Actions/movieActionCreator';
import { connect } from 'react-redux'

const Search = (props) => {
    const [staticMovieValue, setStaticMovieValue] = useState(props.searchInputValue);

    const setMovieHandler = (movieTitleInput) => {
        setStaticMovieValue(movieTitleInput)
    }
    const searchForMovie = props.enterInput;

    useEffect(() => {
        const searchMovie = setTimeout(() => {
            if (staticMovieValue) searchForMovie(staticMovieValue)
        }, 2000);
        return () => {
            clearTimeout(searchMovie)
        }
    }, [staticMovieValue, searchForMovie])

    return (
        <section className="search-section">
            <h2>Search by entering movie name:</h2>
            <input className="search" type="text" placeholder="movie-name" value={staticMovieValue} onChange={(e) => setMovieHandler(e.target.value)} />
        </section>
    );
}

const mapStateToProps = state => {
    return {
        searchInputValue: state.searchInputValues.searchInputValue
    }
}

const mapDispatchToProps = dispatch => {
    return {
        enterInput: (searchInputValue) => dispatch(storeMovieSearchResult(searchInputValue))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(React.memo(Search));
