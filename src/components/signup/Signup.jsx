import React from "react";
import * as _ from "./SignupStyle"
import * as M from "../my/MyStyle"
import { useState } from "react";

export const Signup = () => {

  const selectList = ["직접입력","@gmail.com", "@naver.com", "@hanmail.com"];
  const [Selected, setSelected] = useState("");
 
  const handleSelect = (e) => {
    setSelected(e.target.value);
  };
    return(
        <>
        <_.BackDrop>
            <_.SignupContainer>
                <_.SignupTitleWrap>
                    <_.SignupTitleText>회원가입</_.SignupTitleText>
                    <_.SignupSubText>
                        <_.SignupSubText>Sign Up</_.SignupSubText>
                    </_.SignupSubText>
                </_.SignupTitleWrap>

                <_.InfoWrap>
                    <_.EmailInputWrap>
                        <_.EmailTitle>이메일</_.EmailTitle>
                        <_.EmailInput/>
                        <_.EmailSelect onChange={handleSelect} value={Selected}>
                        {selectList.map((item) => (
                            <option value={item} key={item}>
                            {item}
                            </option>
                        ))}
                        </_.EmailSelect>
                    </_.EmailInputWrap>
                    <_.EmailInputWrap>
                        <_.EmailTitle>이메일 인증</_.EmailTitle>
                        <_.AuthBtn onClick={() => console.log('clicked')}>인증</_.AuthBtn>
                        <_.AuthCodeNumber/>
                    </_.EmailInputWrap>
                </_.InfoWrap>
                
                <_.InfoWrap>
                    <_.EmailInputWrap>
                        <_.EmailTitle>비밀번호</_.EmailTitle>
                        <_.PasswordInput/>
                        <_.EmailTitle>비밀번호 확인</_.EmailTitle>
                        <_.PasswordInput/>
                    </_.EmailInputWrap>
                </_.InfoWrap>
                
                <_.InfoWrap>
                    <_.EmailInputWrap>
                        <_.EmailTitle>이름</_.EmailTitle>
                        <_.PasswordInput/>
                        <_.EmailTitle>전화번호</_.EmailTitle>
                        <_.PasswordInput/>
                    </_.EmailInputWrap>
                </_.InfoWrap>
                
                <_.InfoBtnWrap>
                    <_.SignupBtn>
                    회원가입
                    </_.SignupBtn>  
                    <M.PasswordChange>
                    가입 취소
                    </M.PasswordChange>
              </_.InfoBtnWrap>
            </_.SignupContainer>
        </_.BackDrop>
        </>
    )
}