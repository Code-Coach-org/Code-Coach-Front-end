import React from "react";
import { useEffect, useState } from "react";
import { ImCross } from "react-icons/im"

import * as _ from "./MyStyle";
const My = () => {
  
  const [isOpen, setIsOpen] = useState(false);

  const openModalHandler = () => {
    setIsOpen(!isOpen);
  };

  return (

    <>
      {isOpen ? (
        <_.ModalBackdrop>
          <_.ModalView>
            <_.LogoWrap>
              <ImCross className="logo" onClick={openModalHandler} />
            </_.LogoWrap>
            <_.PasswordWrap>
              <_.PasswordText>새 비밀번호</_.PasswordText>
              <_.NewPasswordInput type="password"></_.NewPasswordInput>
            </_.PasswordWrap>

            <_.PasswordWrap>
              <_.PasswordText>비밀번호 확인</_.PasswordText>
              <_.NewPasswordInput type="password"></_.NewPasswordInput>
            </_.PasswordWrap>

            
          </_.ModalView>
        </_.ModalBackdrop>
      ) : null}
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
    </>

  );
};

export default My;
