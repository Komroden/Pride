import { REGIST_USER } from './actions'
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
        default:
            return state
    }
}