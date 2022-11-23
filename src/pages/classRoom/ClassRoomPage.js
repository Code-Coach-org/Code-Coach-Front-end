import React from "react";
import { useNavigate, useParams } from "react-router";
import * as S from '../../styles/classRoom/classRoom.style';

const ClassRoomPage = () => {

  const { classId } = useParams();

  return (
    <S.Layout>
      <S.Contents>
        <S.Content>정규교육 6주 과정</S.Content>
        <S.ContentTitle>언플러그드 강의</S.ContentTitle>
        <S.Content>공지사항</S.Content>
        <S.Content>커리큘럼</S.Content>
        <S.Content>보고서</S.Content>
        <S.Content>출석</S.Content>
      </S.Contents>
      <S.Methods>
        <S.Method>업로드</S.Method>
        <S.Method>다운로드</S.Method>
      </S.Methods>
      <S.PDF href="https://github.com/Code-Coach-org/Code-Coach-Front-end/files/10072275/1.pdf">PDF링예시</S.PDF>
    </S.Layout>
  );
};

export default ClassRoomPage;
