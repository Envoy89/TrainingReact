import { combineReducers } from 'redux'
import { homeReducer } from '../Home/reducers';

export const rootReducer = combineReducers({
    home: homeReducer,
})