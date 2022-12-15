import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const Community = () => {
  const [category] = React.useState([
    {
      title: "공지사항",
      content: ["홈페이지 이용 안내", "수업 공지", "모집 공지", "행사 공지"],
    },
    {
      title: "게시판",
      content: ["A 게시판", "B 게시판", "C 게시판", "D 게시판"],
    },
  ]);
  return (
    <Frame>
      <Aside>
        {category.map((data) => {
          return (
            <>
              <h4>{data.title}</h4>
              <hr />
              {data.content.map((contents) => {
                return (
                  <>
                    <NavLink to={`123`}>
                      <span>{contents}</span>
                    </NavLink>
                  </>
                );
              })}
            </>
          );
        })}
        <h4>Q&A</h4>
        <hr />
        <span>학생 질문</span>
        <span>학부모 질문</span>
      </Aside>
      <div>안에 내용</div>
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

// const Over = styled.div`
//   &:hover {
//     cursor: pointer;
//     color: #03a9f4;
//   }

// `;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 15%;
  padding: 1%;
  background-color: #efefef;
  row-gap: 5px;
`;
