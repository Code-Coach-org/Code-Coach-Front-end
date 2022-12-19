import axios from 'axios';

const instanceWithToken = axios.create({
    baseURL: `http://${process.env.REACT_APP_BACK_BASE_URL}/`,
});

instanceWithToken.interceptors.request.use(
    (request) => {
        const accessToken = localStorage.getItem("ACCESS_TOKEN");
        if (accessToken) {
            request.headers = {
                "Authorization": "Bearer " + accessToken ?? null,
                "Content-Type": "application/json",
            }
        }
        return request;
    },
    (error) => {
        return error;
    }
);

instanceWithToken.interceptors.response.use((response) => {
},
error => {
    return Promise.reject(error);
});

export default instanceWithToken; 