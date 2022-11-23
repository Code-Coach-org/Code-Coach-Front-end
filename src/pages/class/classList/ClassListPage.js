import React from "react";
import { useNavigate } from "react-router";
import * as S from '../../../styles/class/classList/classList.style';

const ClassListPage = () => {

  const navigate = useNavigate();

  const onClickCard = () => {
    navigate('/class/test');
  }

  return (
    <S.Layout>
      <S.Wapper>
        <S.Title>진행중인 수업</S.Title>
        <S.CardWrapper>
          <S.Card onClick={onClickCard}>
            정규교육 언플러그드 강의
          </S.Card>
          <S.Card onClick={onClickCard}>
            정규교육 언플러그드 강의
          </S.Card>
          <S.Card onClick={onClickCard}>
            정규교육 언플러그드 강의
          </S.Card>
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

export default ClassListPage;
