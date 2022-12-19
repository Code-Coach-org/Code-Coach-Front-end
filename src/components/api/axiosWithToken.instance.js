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
    if (response === undefined) return {
        status: 400,
        data: "Axios 통신 에러"
    };
    if (!response.data.status) return {
        status: 200,
        data: response.data
    };
    if (response.data.status === 500) return {
        status: 500,
        data: response.data.message
    };
},
    error => {
        return Promise.reject(error);
    });

export default instanceWithToken; 