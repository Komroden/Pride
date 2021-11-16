import {NEWS} from './actions'
const initialState = {
    value:{
        news:[]
    }

}

export const newsReducer = (state = initialState, action) => {
    switch (action.type) {
        case NEWS: {
            return {
                ...state,
                value:action.payload
            }
        }

        default:
            return state
    }
}