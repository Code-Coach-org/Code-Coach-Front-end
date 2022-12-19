export const initialState = {
    token: localStorage.getItem('ACCESS_TOKEN'),
    isAuthenticated: false,
    user: null
};