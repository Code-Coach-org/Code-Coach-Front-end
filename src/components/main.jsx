import React from "react";
import * as S from "../styles/main.style";
import News from "./news";
import Slick from "./slick";

export default function mainpage() {
  return (
    <S.Layout>
      <S.Frame>
        <Slick />
        <News />
      </S.Frame>
    </S.Layout>
  );
}
