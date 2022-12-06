import React from "react";
import { useEffect } from "react";
import { useState } from "react";

import * as _ from "./MyStyle";
const My = () => {
  const [isLogIn, setIsLogIn] = useState(false);

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
                <_.MyText>전화번호 : </_.MyText>
                <_.MyInput></_.MyInput>
              </_.MyInfoTextWrap>

              <_.MyInfoBtntWrap>
                <_.Complete>확인</_.Complete>
                <_.PasswordChange>비밀번호 변경</_.PasswordChange>
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
