import React from "react";
import * as S from '../../styles/classRoomPage/classRoomPage.style'

const ClassRoomPage = () => {
  return (
    <S.Layout>
      <S.Wapper>
        <S.Title>진행중인 수업</S.Title>
        <S.CardWrapper>
          <S.Card>정규교육 언플러그드 강의</S.Card>
          <S.Card>정규교육 언플러그드 강의</S.Card>
          <S.Card>정규교육 언플러그드 강의</S.Card>
        </S.CardWrapper>
        <S.Title>지난 수업</S.Title>
        <S.CardWrapper>
          <S.Card>20기 교사</S.Card>
          <S.Card>20기 교사</S.Card>
          <S.Card>20기 교사</S.Card>
        </S.CardWrapper>
      </S.Wapper>
    </S.Layout>
  );
};

export default ClassRoomPage;
