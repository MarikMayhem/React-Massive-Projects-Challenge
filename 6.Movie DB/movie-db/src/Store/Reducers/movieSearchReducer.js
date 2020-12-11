import * as actionTypes from '../Actions/actionTypes'

const searchState = {
    movieSearchList: []
}

const searchInputReducer = (state = searchState, action) => {
    if (action.type === actionTypes.SEARCHED) {
        return {
            movieSearchList: action.movieSearchResult.data.results
        }
    } else {
        return state
    }
}

export default searchInputReducer;