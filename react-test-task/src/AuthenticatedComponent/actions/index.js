import { LOGIN, LOGIN_FAILED } from '../constants';
import { ROUTING } from '../../middlewares/constants';

export function auth(payload) {
    return dispatch => {
        if (payload.login === 'admin' && payload.password === '12345') {

            const newState = changeUserAuthData(true);

            dispatch({
                type: LOGIN,
                payload: newState
            });
    
            dispatch({
                type: ROUTING,
                payload: {
                    method: "replace",
                    nextUrl: "/profile"
                }
            });
        } else {
            //const newState = changeUserAuthData(false);

            alert('Имя пользователя или пароль введены не верно');
            
            dispatch({
                type: LOGIN_FAILED
            });
        }
    }
}

function changeUserAuthData(isAuth) {
    const newState = {
        isAuthenticated: true
    };
    window.localStorage.setItem('rr_user_test', JSON.stringify(newState));

    return newState;
}