import * as actionTypes from './actionTypes';
import axios from '../../axios-custom';

export const saveMovieSearchResult = (movieSearchResult, searchInputValue) => {
    const searchPayload = { movieSearchResult: movieSearchResult, inputValue: searchInputValue };
    return {
        type: actionTypes.SEARCHED,
        searchPayload
    }
}

export const storeMovieSearchResult = (searchInputValue) => {
    return dispatch => {
        axios.get(`search/movie?&language=en-US&query=${searchInputValue}&page=1`)
            .then(res => dispatch(saveMovieSearchResult(res, searchInputValue)))
    }
}