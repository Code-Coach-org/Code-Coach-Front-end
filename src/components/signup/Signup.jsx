import React from "react";
import * as _ from "./SignupStyle"
import * as M from "../my/MyStyle"
import { useState } from "react";
import { useForm } from "react-hook-form";
import instance from "../api/axios.instance";
import { useNavigate } from "react-router";

export const Signup = () => {

    const selectList = ["직접입력", "@gmail.com", "@naver.com", "@hanmail.com"];
    const [selected, setSelected] = useState("");
    const { register, getValues, handleSubmit, formState: { isSubmitting, errors } } = useForm();
    const navigate = useNavigate();

    const handleSelect = (e) => {
        setSelected(e.target.value);
    };

    const onEmailVarify = async () => {
        const { email } = getValues();
        await instance.get(`/api/users/send-email?email=${email+selected}`);
        alert('이메일 인증 메일 전송이 완료되었습니다.');
    };

    const onSubmit = async (data) => {
        const emailCheck = await instance.get(`/api/users/check-verifykey?key=${data.authCode}`);
        if (!emailCheck.data.success) {
            alert('이메일 인증 코드가 다릅니다.');
            return;
        }
        await instance.post('/api/users/register', JSON.stringify({
            email: data.email,
            password: data.password,
            userName: data.name,
            phone: data.phone
        }));
        navigate('/');
    }

    return (
        <>
            <_.BackDrop>
                <_.SignupContainer onSubmit={handleSubmit(onSubmit)}>
                    <_.SignupTitleWrap>
                        <_.SignupTitleText>회원가입</_.SignupTitleText>
                        <_.SignupSubText>
                            <_.SignupSubText>Sign Up</_.SignupSubText>
                        </_.SignupSubText>
                    </_.SignupTitleWrap>
                    <_.InfoWrap>
                        <_.EmailInputWrap>
                            <_.EmailTitle>이메일</_.EmailTitle>
                            {errors.email && <small role="alert">{errors.email.message}</small>}
                            <_.EmailInput {...register("email", {
                                required: "이메일은 필수 입력입니다.",
                            })} />
                            <_.EmailSelect onChange={handleSelect} value={selected}>
                                {selectList.map((item) => (
                                    <option value={item} key={item}>
                                        {item}
                                    </option>
                                ))}
                            </_.EmailSelect>
                        </_.EmailInputWrap>
                        <_.EmailInputWrap>
                            <_.EmailTitle>이메일 인증</_.EmailTitle>
                            <_.AuthBtn type="button" onClick={() => onEmailVarify()}>인증</_.AuthBtn>
                            <_.AuthCodeNumber {...register("authCode")} />
                        </_.EmailInputWrap>
                    </_.InfoWrap>

                    <_.InfoWrap>
                        <_.EmailInputWrap>
                            <_.EmailTitle>비밀번호</_.EmailTitle>
                            {errors.password && <small role="alert">{errors.password.message}</small>}
                            <_.PasswordInput type="password" {...register("password", {
                                required: "비밀번호는 필수 입력 사항 입니다."
                            })} />
                            <_.EmailTitle>비밀번호 확인</_.EmailTitle>
                            {errors.rewritePassword && <small role="alert">{errors.rewritePassword.message}</small>}
                            <_.PasswordInput type="password" {...register("rewritePassword", {
                                required: "비밀번호를 확인 해주세요.",
                                validate: {
                                    matchPrevPassword: (value) => {
                                        const { password } = getValues();
                                        return password === value || "비밀번호가 일치하지 않습니다.";
                                    }
                                }
                            })} />
                        </_.EmailInputWrap>
                    </_.InfoWrap>
                    <_.InfoWrap>
                        <_.EmailInputWrap>
                            <_.EmailTitle>이름</_.EmailTitle>
                            {errors.name && <small role="alert">{errors.name.message}</small>}
                            <_.PasswordInput {...register("name", {
                                required: "이름은 필수 입력 사항 입니다."
                            })} />
                            <_.EmailTitle>전화번호</_.EmailTitle>
                            {errors.phone && <small role="alert">{errors.phone.message}</small>}
                            <_.PasswordInput {...register("phone", {
                                required: "전화번호는 필수 입력 사항입니다."
                            })}/>
                        </_.EmailInputWrap>
                    </_.InfoWrap>
                    <_.InfoBtnWrap>
                        <_.SignupBtn type="submit" disabled={isSubmitting}>
                            {isSubmitting? "가입 중" : "회원가입" }
                        </_.SignupBtn>
                        <M.PasswordChange type="button" onClick={() => navigate('/')}>
                            가입 취소
                        </M.PasswordChange>
                    </_.InfoBtnWrap>
                </_.SignupContainer>
            </_.BackDrop>
        </>
    )
}