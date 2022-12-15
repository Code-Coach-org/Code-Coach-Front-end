import React from "react";
import styled from "styled-components";
import * as S from "../styles/community/community.style";
import * as M from "../styles/common/modal.style";
import Modal from "react-modal";
import BaseModalComponent from "../components/common/BaseModalComponent";

export const Board = ({ subject }) => {
  const [userModalIsOpen, setUserModalIsOpen] = React.useState(false);
  const openUserModal = () => setUserModalIsOpen(true);
  const closeUserModal = () => setUserModalIsOpen(false);
  return <S.Warpper>
  <S.Header>
    <S.All>B 게시판</S.All>
    <S.Add onClick={openUserModal}>작성하기</S.Add>
    <Modal
      isOpen={userModalIsOpen}
      onRequestClose={closeUserModal}
      style={M.ModalStyle}
    >
      <BaseModalComponent
        closeModal={closeUserModal}
        title={"유저 이메일"}
      />
    </Modal>
  </S.Header>
  <S.Member>
    <S.MemberRow>
      <S.Item></S.Item>
      <S.Item>제목</S.Item>
      <S.Item>작성일</S.Item>
      <S.Item>작성자</S.Item>
      <S.Item>조회</S.Item>
    </S.MemberRow>
    <S.MemberRow>
      <S.Item>335</S.Item>
      <S.Item>이 문제 어떻게 해결하나요?</S.Item>
      <S.Item>20xx.xx.xx</S.Item>
      <S.Item>홍길동</S.Item>
      <S.Item>15</S.Item>
    </S.MemberRow>
    <S.MemberRow>
      <S.Item>354</S.Item>
      <S.Item>이 문제 어떻게 해결하나요?</S.Item>
      <S.Item>20xx.xx.xx</S.Item>
      <S.Item>김영민</S.Item>
      <S.Item>12</S.Item>
    </S.MemberRow>
  </S.Member>
</S.Warpper>
};

export default Board;

const Frame = styled.div`
  display: flex;
  margin-left: 40px;
  margin-top: 25px;
  column-gap: 10px;
  width: 90%;
  height: 100%;
`;
