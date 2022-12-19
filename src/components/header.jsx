import React from "react";
import * as S from "../styles/common/header.style";
import * as M from "../styles/common/modal.style";
import { Link, NavLink, useSearchParams } from "react-router-dom";
import LoginModal from "./login/Login";
import Modal from "react-modal";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCheckToken from "../hooks/useCheckToken";
import { logoutSuccess } from "../redux/user/action/user.action";

function Header() {

  const param = useSearchParams();

  const isAuthenticated = useSelector((state) => state.userReducer.isAuthenticated);

  useEffect(() => {
    if (param.signup === "true") {
      openModal();
    }
  }, [param.signup])
  
  useCheckToken();
  
  const dispatch = useDispatch();
  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

  const onLogout = () => {
    dispatch(logoutSuccess());
  }

  return (
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
        {isAuthenticated ?
          <S.LoginBox>
            <S.Btn>
              <Link to="/mypage">마이페이지</Link>
            </S.Btn>
            <S.Btn onClick={onLogout}>로그아웃</S.Btn>
          </S.LoginBox>
          : <S.LoginBox>
            <S.Btn onClick={openModal}>로그인</S.Btn>
            <Modal
              isOpen={modalIsOpen}
              onRequestClose={closeModal}
              style={M.ModalStyleBig}
            >
              <LoginModal closeModal={closeModal} />
            </Modal>
          </S.LoginBox>
        }
      </S.HeaderBox>
    </S.Frame>
  );
}

export default Header;
