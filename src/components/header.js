import React from "react";
import * as S from "../style/header.style";
import { Link, NavLink } from "react-router-dom";

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
          <NavLink className="nav-item" end to="">
            메인
          </NavLink>
          <NavLink className="nav-item" to="/none">
            모집
          </NavLink>
          <NavLink className="nav-item" to="/community">
            커뮤니티
          </NavLink>
          <NavLink className="nav-item" to="/none1">
            수업
          </NavLink>

          <NavLink className="nav-item" to="/none2">
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
