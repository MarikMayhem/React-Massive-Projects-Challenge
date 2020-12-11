import React, { useEffect, useState } from 'react';
import './Search.scss'
import { storeMovieSearchResult } from '../../Store/Actions/movieActionCreator';
import { connect } from 'react-redux'

const Search = (props) => {

    const [searchMovie, setSearchMovie] = useState('')

    useEffect(() => {
        const delayDispatch = setTimeout(() => {
            props.enterInput(searchMovie)
        }, 1000)

        return () => clearTimeout(delayDispatch)
    }, [searchMovie, props])

    return (
        <section className="search-section">
            <h2>Search by entering name:</h2>
            <input className="search" type="text" onChange={(e) => setSearchMovie(e.target.value)} />
        </section>
    );
}

const mapDispatchToProps = dispatch => {
    return {
        enterInput: (searchInputValue) => dispatch(storeMovieSearchResult(searchInputValue))
    }
}

export default connect(null, mapDispatchToProps)(Search);
