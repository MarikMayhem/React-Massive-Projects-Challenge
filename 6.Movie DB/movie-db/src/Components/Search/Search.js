import React, { useEffect, useState } from 'react';
import './Search.scss'
import { storeMovieSearchResult } from '../../Store/Actions/movieActionCreator';
import { connect } from 'react-redux'

const Search = (props) => {
    const [searchMovie, setSearchMovie] = useState('');
    const [movieTitle, setMovieTitle] = useState(props.searchInputValue);

    const setMovieHandler = (movieTitle) => {
        setSearchMovie(movieTitle)
        setMovieTitle(movieTitle)
    }

    useEffect(() => {
        const delayDispatch = setTimeout(() => {
            props.enterInput(searchMovie)
        }, 1000)

        return () => clearTimeout(delayDispatch)
    }, [searchMovie, props])

    return (
        <section className="search-section">
            <h2>Search by entering movie name:</h2>
            <input className="search" type="text" placeholder="movie-name" value={movieTitle} onChange={(e) => setMovieHandler(e.target.value)} />
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
