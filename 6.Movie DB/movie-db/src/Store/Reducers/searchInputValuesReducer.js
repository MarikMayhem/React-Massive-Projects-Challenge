import * as actionTypes from '../Actions/actionTypes'

const searchState = {
    movieSearchList: [],
    searchInputValue: ''
}

const searchInputValuesReducer = (state = searchState, action) => {
    if (action.type === actionTypes.SEARCHED) {
        console.log(action)
        return {
            movieSearchList: action.searchPayload.movieSearchResult.data.results,
            searchInputValue: action.searchPayload.inputValue
        }
    } else {
        return state
    }
}

export default searchInputValuesReducer;