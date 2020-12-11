import * as actionTypes from './actionTypes';
import axios from '../../axios-custom';

export const saveMovieSearchResult = (movieSearchResult) => {
    return {
        type: actionTypes.SEARCHED,
        movieSearchResult
    }
}

export const storeMovieSearchResult = (searchInputValue) => {
    return dispatch => {
        axios.get(`https://api.themoviedb.org/3/search/movie?&language=en-US&query=${searchInputValue}&page=1`)
            .then(res => dispatch(saveMovieSearchResult(res)))
    }
}