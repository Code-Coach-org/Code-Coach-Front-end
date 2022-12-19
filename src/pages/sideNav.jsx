import React from "react";
import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 15%;
  padding: 1%;
  background-color: #efefef;
  row-gap: 5px;
`;

export const SideNav = ({ boards }) => {

  return (
    <Aside>
      <h4>게시판</h4>
      <hr />
      {boards?.map((board) => {
        return (
          <NavLink to={`/community/${board.boardId}`} key={board.boardId}>
            <span>{board.name}</span>
          </NavLink>
        )
      })}
      <h4>Q&A</h4>
      <hr />
      <span>학생 질문</span>
      <span>학부모 질문</span>
    </Aside>
  );
};
