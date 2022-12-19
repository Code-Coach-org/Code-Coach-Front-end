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

export const SideNav = () => {
  

  return (
    <Aside>
      <h4>공지사항</h4>
      <hr />
      <NavLink to="/community/guide">
        <span>홈페이지 이용 안내</span>
      </NavLink>
      <NavLink to="/community/lesson">
        <span>수업 공지</span>
      </NavLink>
      <NavLink to="/community/recruit">
        <span>모집 공지</span>
      </NavLink>
      <NavLink to="/community/event">
        <span>행사 공지</span>
      </NavLink>
      <h4>게시판</h4>
      <hr />
      <NavLink to="/community/boardA">
        <span>A 게시판</span>
      </NavLink>
      <NavLink to="/community/boardB">
        <span>B 게시판</span>
      </NavLink>
      <NavLink to="/community/boardC">
        <span>C 게시판</span>
      </NavLink>
      <NavLink to="/community/boardD">
        <span>D 게시판</span>
      </NavLink>
      <h4>Q&A</h4>
      <hr />
      <span>학생 질문</span>
      <span>학부모 질문</span>
    </Aside>
  );
};
