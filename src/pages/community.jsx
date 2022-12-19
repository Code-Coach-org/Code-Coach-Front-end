import React from "react";
import styled from "styled-components";
import { SideNav } from "./sideNav";
import { useParams } from "react-router";
import Board from "./board";
import { useEffect } from "react";

export const Community = () => {
  const { co_id } = useParams();

  useEffect(() => {
    const getAllBoards = async () => {
      
    }
    getAllBoards();
  }, [])

  return (
    <Frame>
      <SideNav />
      <Board subject={co_id} />
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
`;
