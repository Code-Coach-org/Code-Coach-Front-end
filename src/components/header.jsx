import React from "react";
import * as S from "../styles/common/header.style";
import * as M from "../styles/common/modal.style";
import { Link, NavLink } from "react-router-dom";
import LoginModal from "./login/Login";
import Modal from "react-modal";

function Header() {

  const [modalIsOpen, setModalIsOpen] = React.useState(false);
  const openModal = () => setModalIsOpen(true);
  const closeModal = () => setModalIsOpen(false);

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
        <S.LoginBox>
          <S.Btn>
            <Link to="/mypage">마이페이지</Link>
          </S.Btn>
          <S.Btn onClick={openModal}>로그인</S.Btn>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={M.ModalStyle}
          >
            <LoginModal closeModal={closeModal} />
          </Modal>
          <S.Btn>로그아웃</S.Btn>
        </S.LoginBox>
      </S.HeaderBox>
    </S.Frame>
  );
}

export default Header;
