import { 
    GET_USERINFO, 
    LOGIN_FAIL, 
    UNAUTHORIZED_ERROR, 
    LOGIN_SUCCESS, 
    LOGOUT_SUCCESS,
    FETCH_TOKEN_FAIL, 
    FETCH_TOKEN_SUCCESS
} from "./user.actionType";

export const getUserInfo = (user) => ({ 
    type: GET_USERINFO,
    payload: user
});
export const loginFail = () => ({ type: LOGIN_FAIL });
export const fetchTokenFail = () => ({ type: FETCH_TOKEN_FAIL })
export const fetchTokenSuccess = (token) => ({ 
    type: FETCH_TOKEN_SUCCESS,
    payload: token
});
export const logoutSuccess = () => ({ type: LOGOUT_SUCCESS });
export const loginSuccess = (token) => ({ 
    type: LOGIN_SUCCESS,
    payload: token,
});