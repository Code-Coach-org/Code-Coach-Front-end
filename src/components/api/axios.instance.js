import axios from 'axios';

export const instance = axios.create({
    baseURL: `http://${process.env.REACT_APP_BACK_BASE_URL}/`,
    timeout: 3000,
    headers: {
        "Content-Type": "application/json"
    }
});

instance.interceptors.response.use((response) => {
},
error => {
    return Promise.reject(error);
});

export default instance; 