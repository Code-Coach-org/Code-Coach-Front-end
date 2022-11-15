import React from "react";
import * as S from "../styles/news.style";

export const News = () => {
  return (
    <S.NewsBox>
      <span>새로운 소식</span>
      <S.Line></S.Line>
      <S.ItemBox>
        <S.NewsItem />
        <S.NewsItem />
        <S.NewsItem />
      </S.ItemBox>
    </S.NewsBox>
  );
};
