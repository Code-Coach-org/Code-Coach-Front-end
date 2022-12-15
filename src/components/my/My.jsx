import React from "react";
import { useEffect, useState } from "react";
import {ImCross} from "react-icons/im"

import * as _ from "./MyStyle";
const My = () => {
  const [isLogIn, setIsLogIn] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (sessionStorage.getItem("user_id") === null) {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 없다면
      console.log("isLogin ?? :: ", isLogIn);
    } else {
      // sessionStorage 에 user_id 라는 key 값으로 저장된 값이 있다면
      // 로그인 상태 변경
      setIsLogIn(true);
      console.log("isLogin ?? :: ", isLogIn);
    }
  });

  return (
    
    <>
      {isOpen ? (
                  <_.ModalBackdrop onClick={openModalHandler}>
                    <_.ModalView>
                      <_.LogoWrap>
                        <ImCross className="logo"/>
                      </_.LogoWrap>
                      <_.PasswordWrap>
                        <_.PasswordText>새 비밀번호</_.PasswordText>
                        <_.NewPasswordInput></_.NewPasswordInput>
                      </_.PasswordWrap>

                      <_.PasswordWrap>
                        <_.PasswordText>비밀번호 확인</_.PasswordText>
                        <_.NewPasswordInput></_.NewPasswordInput>
                      </_.PasswordWrap>
                    </_.ModalView>
                  </_.ModalBackdrop>
                ) : null}
      {isLogIn ? (
        <_.MyContainer>
          <_.MyHeader>마이페이지</_.MyHeader>
          <_.MyInfo>
            <_.MyCategory>
              <_.MyInfoTab>내 정보</_.MyInfoTab>
              <_.MyInfoTab>나의 수업</_.MyInfoTab>
              <_.MyInfoTab>나의 질문</_.MyInfoTab>
              <_.MyInfoTab>내 글 관리</_.MyInfoTab>
            </_.MyCategory>

            <_.MyProfileWrap>
              <_.MyImgWrap>
                <_.MyProfileText>프로필 : </_.MyProfileText>
                <_.MyProfileImg></_.MyProfileImg>
              </_.MyImgWrap>

              <_.MyInfoTextWrap>
                <_.MyText>이름 : </_.MyText>
                <_.MyInput></_.MyInput>
              </_.MyInfoTextWrap>

              <_.MyInfoTextWrap>
                <_.MyText>별명 : </_.MyText>
                <_.MyInput></_.MyInput>
              </_.MyInfoTextWrap>

              <_.MyInfoTextWrap>
                <_.MyText>이메일 : </_.MyText>
                <_.MyEmailInfo>mijin.develop@gmail.com</_.MyEmailInfo>
              </_.MyInfoTextWrap>


              <_.MyInfoTextWrap>
                <_.MyText>전화번호 :</_.MyText>
                <_.MyInput></_.MyInput>
              </_.MyInfoTextWrap>
              

              <_.MyInfoBtntWrap>
                <_.Complete>확인</_.Complete>
                <_.PasswordChange onClick={openModalHandler}>
                  비밀번호 변경
                </_.PasswordChange>
                
              </_.MyInfoBtntWrap>
            </_.MyProfileWrap>
          </_.MyInfo>
        </_.MyContainer>
      ) : (
        <div>로그인 후 이용해주세요</div>
      )}
    </>
    
  );
};

export default My;
