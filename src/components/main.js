import React from "react";
import styled from "styled-components";
import { News } from "./news";
import Slick from "../components/slick";

export default function mainpage() {
  return (
    <Frame>
      <Slick />
      <News />
    </Frame>
  );
}

const Frame = styled.div`
  width: 90%;
`;
