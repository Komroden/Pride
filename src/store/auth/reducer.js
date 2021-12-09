import {LOGOUT_USER, REGIST_USER} from './actions'
const initialState = {
    token:null

}

export const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case REGIST_USER: {
            return {
                ...state,
                token: action.payload
            }
        }
        case LOGOUT_USER: {
            return {
                ...state,
                token: null
            }
        }
        default:
            return state
    }
}