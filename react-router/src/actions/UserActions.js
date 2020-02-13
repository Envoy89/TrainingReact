import {
  LOGIN_REQUEST,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_SUCCESS
} from "../constants/User";
import { ROUTING } from "../constants/Routing";

export function login(payload) {
  return dispatch => {
    dispatch({
      type: LOGIN_REQUEST
    });

    setTimeout(() => {
      dispatch({
        type: LOGIN_SUCCESS,
        payload: {
          name: payload.name,
          isAuthenticated: payload.name === "admin"
        }
      });

      dispatch({
        type: ROUTING,
        payload: {
          method: "replace", //или, например, replace
          nextUrl: "/admin"
        }
      });
    }, 1000);
  };
}
export function logout() {
  return {
    type: LOGOUT_SUCCESS
  };
}
