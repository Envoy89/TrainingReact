import { combineReducers } from 'redux'
import { homeReducer } from '../Home/reducers';
import { newsReducer } from '../News/reducers';

export const rootReducer = combineReducers({
    home: homeReducer,
    news: newsReducer,
})