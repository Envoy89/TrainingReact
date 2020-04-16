import {
    LOGIN,
    LOGOUT
} from '../constants';

const initialState = JSON.parse(window.localStorage.getItem("rr_user_test")) || {
    isAuthenticated: false
};

export function authReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return {...state, isAuthenticated: action.payload.isAuthenticated}
        default:
            return state;
    }
}