import { createStore, combineReducers,compose, applyMiddleware } from 'redux';

import thunk from 'redux-thunk';
import {menuReducer} from "./menu/reducer";
import {timerReducer} from "./timer/reducer";
import {loginReducer} from "./auth/reducer";





const rootReducer = combineReducers({
    showMenu: menuReducer,
    showMessage:timerReducer,
    auth:loginReducer


})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;



export const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))