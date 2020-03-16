import { combineReducers } from 'redux'
import { homeReducer } from '../Home/reducers';
import { newsReducer } from '../News/reducers';
import { profileReducer } from '../Profile/reducers';
import { authReducer } from '../AuthenticatedComponent/reducers';

export const rootReducer = combineReducers({
    home: homeReducer,
    news: newsReducer,
    profile: profileReducer,
    auth: authReducer,
})