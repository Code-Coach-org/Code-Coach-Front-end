import React from "react";
import styled from "styled-components";
import * as S from "../styles/community/community.style";
import { useNavigate } from "react-router";

export const Board = ({ subject, articles }) => {

  const navigate = useNavigate();

  return <S.Warpper>
    <S.Header>
      <S.All>B 게시판</S.All>
      {subject && <S.Add onClick={() => navigate('write')}>작성하기</S.Add>}
    </S.Header>
    <S.Member>
      <S.MemberRow>
        <S.Item></S.Item>
        <S.Item>제목</S.Item>
        <S.Item>작성일</S.Item>
        <S.Item>작성자</S.Item>
        <S.Item>조회</S.Item>
      </S.MemberRow>
      {articles?.map((article) => {
        return (
          <S.MemberRow>
            <S.Item>{article.id}</S.Item>
            <S.Item>{article.title}</S.Item>
            <S.Item>{article.createdAt.slice(0, 10)}</S.Item>
            <S.Item>{article.user.userName}</S.Item>
            <S.Item>{article.view}</S.Item>
          </S.MemberRow>
        )
      })}
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
