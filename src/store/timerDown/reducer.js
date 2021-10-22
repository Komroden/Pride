import {OPEN_TIMER, SET_DAYS, SET_HOURS, SET_MINUTE, SET_PRICE, SET_SECONDS} from './actions'
const initialState = {
    showMessage: false,
    hours:0,
    days:0,
    seconds:0,
    minute:0,
    price:0


}

export const timerReducer = (state = initialState, action) => {
    switch (action.type) {
        case OPEN_TIMER: {
            return {
                ...state,
                showMessage: !state.showMessage
            }

        }
        case SET_MINUTE: {
            return {
                ...state,
                minute: action.payload
            }

        }

        case SET_PRICE: {
            return {
                ...state,
                price: action.payload
            }

        }
        case SET_SECONDS: {
            return {
                ...state,
                seconds: action.payload
            }

        }
        case SET_HOURS: {
            return {
                ...state,
                hours: action.payload
            }

        }
        case SET_DAYS: {
            return {
                ...state,
                days: action.payload
            }

        }




        default:
            return state
    }
}