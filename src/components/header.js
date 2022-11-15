import React from "react";
import * as S from "../style/header.style";
import { NavLink } from "react-router-dom";

const navStyle = {
  textDecoration: "none",
  color: "black",
  backgroundColor: "#ededed",
};

function Header() {
  return (
    <S.Frame>
      <S.HeaderBox>
        <S.NavList>
          <NavLink style={navStyle} to="/">
            메인
          </NavLink>
          <NavLink style={navStyle} to="/">
            모집
          </NavLink>
          <NavLink style={navStyle} to="/">
            커뮤니티
          </NavLink>
          <NavLink style={navStyle} to="/">
            수업
          </NavLink>
          <NavLink style={navStyle} to="/">
            관리
          </NavLink>
        </S.NavList>
        <S.LoginBox>
          <S.Btn>마이페이지</S.Btn>
          <S.Btn>로그아웃</S.Btn>
        </S.LoginBox>
      </S.HeaderBox>
    </S.Frame>
  );
}

export default Header;
