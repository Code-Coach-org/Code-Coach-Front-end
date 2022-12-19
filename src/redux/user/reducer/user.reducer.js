import { GET_USERINFO, LOGIN_SUCCESS, LOGOUT_SUCCESS, FETCH_TOKEN_FAIL, FETCH_TOKEN_SUCCESS } from "../action/user.actionType"
import { initialState } from "./user.initialState"

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_SUCCESS:
            localStorage.setItem("ACCESS_TOKEN", action.payload);
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true
            }
        case LOGOUT_SUCCESS:
            localStorage.removeItem("ACCESS_TOKEN");
            return {
                ...state,
                token: null,
                isAuthenticated: false
            }
        case FETCH_TOKEN_SUCCESS:
            return {
                ...state,
                token: action.payload,
                isAuthenticated: true
            }
        case FETCH_TOKEN_FAIL:
            return {
                ...state,
                token: null,
                isAuthenticated: false
            }
        case GET_USERINFO:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}

export default userReducer;