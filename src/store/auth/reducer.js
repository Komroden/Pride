import { LOGIN_USER } from './actions'
const initialState = {
    isAuth: false

}

export const loginReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_USER: {
            return {
                ...state,
                isAuth: !state.isAuth
            }
        }
        default:
            return state
    }
}