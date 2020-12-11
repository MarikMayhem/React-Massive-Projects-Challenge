import * as actionTypes from '../Actions/actionTypes'

const moviesByCategory = {
    moviesListByCategory: []
}

const chooseCategoryReducer = (state = moviesByCategory, action) => {
    if (action.type === actionTypes.CATEGORY_CHOSEN) {
        return {
            moviesListByCategory: action.payload.data.results
        }
    } else {
        return state
    }

}

export default chooseCategoryReducer;