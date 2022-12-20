import React from "react";
import styled from "styled-components";
import { SideNav } from "./sideNav";
import { useParams } from "react-router";
import Board from "./board";
import { useEffect } from "react";
import { useState } from "react";
import instanceWithToken from "../components/api/axiosWithToken.instance";

export const Community = () => {
  const { co_id } = useParams();
  const [boards, setBoards] = useState();
  const [articles, setArticles] = useState();
  useEffect(() => {
    const getAllBoards = async () => {
      const boards = await instanceWithToken.get('api/board/all');
      setBoards(boards.data);
    }
    const getAllArticles = async () => {
      const articles = await instanceWithToken.get(`api/board/article/${co_id}/all`);
      setArticles(articles.data);
    }
    getAllBoards();
    getAllArticles();
  }, [co_id])

  return (
    <Frame>
      <SideNav boards={boards} />
      <Board subject={co_id} boards={boards} articles={articles} />
    </Frame>
  );
};

export default Community;

const Frame = styled.div`
  display: flex;
  margin-left: 40px;
  margin-top: 25px;
  column-gap: 10px;
  width: 90%;
  height: 100%;
  min-height: 40rem;
`;
