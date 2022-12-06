import React from "react";
import styled from "styled-components";

export const Community = () => {
  const [category,] = React.useState([
    {
      title: "공지사항",
      content: ["홈페이지 이용 안내", "수업 공지", "모집 공지", "행사 공지"],
    },
    {
      title: "공지사항2",
      content: ["홈페이지 이용 안내", "수업 공지", "모집 공지", "행사 공지"],
    },
  ]);
  return (
    <Frame>
      <Aside>
        {category.map((data, idx) => {
          return (
            <>
              <h4>{data.title}</h4>
              <hr />
              {
                category.map((data, idx) => {
                  return (
                    <>
                    <h4>{data.content}</h4>
                    </>
                  )
                })
              }
            </>
          );
        })}
        <h4>게시판</h4>
        <hr />
        <span>A 게시판</span>
        <span>B 게시판</span>
        <span>C 게시판</span>
        <span>D 게시판</span>
        <span>E 게시판</span>
        <span>F 게시판</span>
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

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 15%;
  padding: 1%;
  background-color: #efefef;
  row-gap: 5px;
`;
