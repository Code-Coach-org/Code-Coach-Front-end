import React from "react";
import * as S from "../styles/common/header.style";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";

function Header() {
  const [isLogin, setIsLogin] = useState(false)

  return (
    <>
    <S.Frame>
      <S.HeaderBox>
        <S.NavList>
          <NavLink end to="">
            메인
          </NavLink>
          <NavLink to="/none">모집</NavLink>
          <NavLink to="/community/guide">커뮤니티</NavLink>
          <NavLink to="/class">수업</NavLink>
          <NavLink to="/admin">관리</NavLink>
        </S.NavList>
        <S.LoginBox>
          <S.Btn>
            <Link to="/mypage">마이페이지</Link>
          </S.Btn>
          {
            isLogin ? <S.Btn>로그아웃</S.Btn> : <S.Btn>로그인</S.Btn>
          }
        </S.LoginBox>
      </S.HeaderBox>
    </S.Frame>
     
    </>
  );
}

export default Header;
