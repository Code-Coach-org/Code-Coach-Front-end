import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import instance from '../components/api/axios.instance';
import { fetchTokenFail, fetchTokenSuccess, getUserInfo } from '../redux/user/action/user.action';

const useCheckToken = () => {

    const dispatch = useDispatch();
    useEffect(() => {
        const token = localStorage.getItem("ACCESS_TOKEN");
        if (token) {
            // 토큰이 만료된 경우
            (async () => {
                const user = await instance.get("api/users", {
                    headers: {
                        "Authorization": "Bearer " + token || false
                    }
                });
                if (user.status === 200) {
                    dispatch(fetchTokenSuccess(token));
                    dispatch(getUserInfo(user.data))
                }
                else {
                    dispatch(fetchTokenFail());
                }
            })();
        }
        else {
            dispatch(fetchTokenFail());
        }
    }, [dispatch]);

}

export default useCheckToken;