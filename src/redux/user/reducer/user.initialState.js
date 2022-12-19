export const initialState = {
    token: localStorage.getItem('ACCESS_TOKEN'),
    isAuthenticated: null,
    user: null
};