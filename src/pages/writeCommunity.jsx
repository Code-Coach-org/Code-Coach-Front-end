import React from "react";
import styled from "styled-components";
import { SideNav } from "./sideNav";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import instanceWithToken from "../components/api/axiosWithToken.instance";
import WriteArticle from "./writeArticle";

export const WriteCommunity = () => {
  const { co_id } = useParams();
  const [boards, setBoards] = useState();
  useEffect(() => {
    const getAllBoards = async () => {
      const boards = await instanceWithToken.get('api/board/all');
      setBoards(boards.data);
    }
    getAllBoards();
  }, [co_id])

  return (
    <Frame>
      <SideNav boards={boards} />
      <WriteArticle subject={co_id} />
    </Frame>
  );
};

export default WriteCommunity;

const Frame = styled.div`
  display: flex;
  margin-left: 40px;
  margin-top: 25px;
  column-gap: 10px;
  width: 90%;
  height: 100%;
`;