import React from "react";
import * as S from "../styles/header.style";
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <S.Frame>
      <S.HeaderBox>
        <S.NavList>
          <NavLink end to="">
            메인
          </NavLink>
          <NavLink to="/none">
            모집
          </NavLink>
          <NavLink to="/community">
            커뮤니티
          </NavLink>
          <NavLink to="/class">
            수업
          </NavLink>
          <NavLink to="/none2">
            관리
          </NavLink>
        </S.NavList>
        <S.LoginBox>
          <S.Btn onClick={() => alert("조용제는 바보다")}>마이페이지</S.Btn>
          <S.Btn>로그아웃</S.Btn>
        </S.LoginBox>
      </S.HeaderBox>
    </S.Frame>
  );
}

export default Header;
