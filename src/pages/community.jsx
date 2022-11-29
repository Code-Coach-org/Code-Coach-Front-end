import React from "react";
import styled from "styled-components";

export const Community = () => {
  // const [category, setCategory] = useState();
  return (
    <Frame>
      <Aside>
        <h4>공지사항</h4>
        <hr />
        <span>홈페이지 이용 안내</span>
        <span>홈페이지 이용 안내</span>
        <span>홈페이지 이용 안내</span>
      </Aside>
      <div>안에 내용</div>
    </Frame>
  );
};

export default Community;

const Frame = styled.div`
  display: flex;
  margin-top: 15px;
  column-gap: 10px;
  width: 90%;
  height: 100%;
`;

const Aside = styled.aside`
  display: flex;
  flex-direction: column;
  width: 17%;
  height: 50vh;
  background-color: #efefef;
`;
