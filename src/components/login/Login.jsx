import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { loginSuccess } from "../../redux/user/action/user.action";
import * as S from "../../styles/common/modal.style";
import instance from "../api/axios.instance";

const LoginModal = ({
    closeModal
}) => {

    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    
    const onLogin = (token) => {
        dispatch(loginSuccess(token));
    }

    const onSubmit = async (data) => {
        const response = await instance.post('/api/users/login', JSON.stringify({
            ...data
        }));
        console.log(response);
        if (!response.data.success) {
            alert("로그인에 실패하였습니다. 아이디와 비밀번호를 다시 확인해주세요");
            return;
        }
        console.log(response)
        onLogin(response.data.token);
        alert("로그인이 완료되었습니다.");
        closeModal();
    }

    const toSignupPage = () => {
        closeModal();
        navigate('/signup');
    }

    return (
        <S.ModalWrapper onSubmit={handleSubmit(onSubmit)}>
            <S.ForgetPassword>
                <S.Text>
                    Don't have an account?
                </S.Text>
                <S.ModalButton type="button" onClick={toSignupPage}>
                    Create Account
                </S.ModalButton>
            </S.ForgetPassword>
            <S.InputWrapper>
                <S.Label>
                    이메일
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                </S.Label>
                {errors.email && <small role="alert">{errors.email.message}</small>}
                <S.Input {...register("email", {
                    required: "이메일은 필수 입력입니다.",
                })}></S.Input>
            </S.InputWrapper>
            <S.InputWrapper>
                <S.Label>
                    패스워드
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                    </svg>
                </S.Label>
                {errors.password && <small role="alert">{errors.password.message}</small>}
                <S.Input type="password" {...register("password", {
                    required: "패스워드는 필수 입력입니다.",
                })}></S.Input>
            </S.InputWrapper>
            <S.ModalButton type="submit" disabled={isSubmitting}>
                Log In
            </S.ModalButton>
            <S.Text>
                Forgot password?
            </S.Text>
        </S.ModalWrapper>
    );
};

export default LoginModal;