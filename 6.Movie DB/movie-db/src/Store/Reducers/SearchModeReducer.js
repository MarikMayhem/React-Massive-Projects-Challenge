import * as actionTypes from '../Actions/actionTypes'

const switchState = {
    search: undefined
}

const searchModeReducer = (state = switchState, action) => {
    if (action.type === actionTypes.CHANGE_SEARCH_CATEGORY) {
        return {
            search: !state.search
        }
    } else {
        return state
    }
}

export default searchModeReducer;