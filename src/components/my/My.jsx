import React from "react";

import {
  MyContainer,
  MyHeader,
  MyInfo,
  MyCategory,
  MyInfoTab,
  MyProfileWrap,
  MyImgWrap,
  MyProfileText,
  MyProfileImg,
  MyInfoTextWrap,
  MyText,
  MyInput,
  PasswordChange,
  MyInfoBtntWrap,
  Complete,
  MyEmailInfo,
} from "./MyStyle";
const My = () => {
  return (
    <>
      <MyContainer>
        <MyHeader>마이페이지</MyHeader>
        <MyInfo>
          <MyCategory>
            <MyInfoTab>내 정보</MyInfoTab>
            <MyInfoTab>나의 수업</MyInfoTab>
            <MyInfoTab>나의 질문</MyInfoTab>
            <MyInfoTab>내 글 관리</MyInfoTab>
          </MyCategory>
          <MyProfileWrap>
            <MyImgWrap>
              <MyProfileText>프로필 : </MyProfileText>
              <MyProfileImg></MyProfileImg>
            </MyImgWrap>
            <MyInfoTextWrap>
              <MyText>이름 : </MyText>
              <MyInput></MyInput>
            </MyInfoTextWrap>
            <MyInfoTextWrap>
              <MyText>별명 : </MyText>
              <MyInput></MyInput>
            </MyInfoTextWrap>
            <MyInfoTextWrap>
              <MyText>이메일 : </MyText>
              <MyEmailInfo>mijin.develop@gmail.com</MyEmailInfo>
            </MyInfoTextWrap>
            <MyInfoTextWrap>
              <MyText>전화번호 : </MyText>
              <MyInput></MyInput>
            </MyInfoTextWrap>
            <MyInfoBtntWrap>
              <Complete>확인</Complete>
              <PasswordChange>비밀번호 변경</PasswordChange>
            </MyInfoBtntWrap>
          </MyProfileWrap>
        </MyInfo>
      </MyContainer>
    </>
  );
};

export default My;
