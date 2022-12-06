import React from "react";
import ClassHeaderComponent from "../../../components/class/ClassHeader";
import PostItemComponent from "../../../components/community/PostItem";
import * as S from "../../../styles/community/communityBase.style";

const ClassNoticePage = () => {

  return (
    <S.Layout>
      <ClassHeaderComponent />
      <S.Warpper>
        <S.TitleWarpper>
          <S.Title>공지사항</S.Title>
          <S.Button>작성하기</S.Button>
        </S.TitleWarpper>
        <S.Posts>
          <S.PostHeader>
            <div>
            </div>
            <div>
              제목
            </div>
            <div>
              작성일
            </div>
            <div>
              작성자
            </div>
            <div>
              조회
            </div>
          </S.PostHeader>
          <PostItemComponent />
          <PostItemComponent />
        </S.Posts>
      </S.Warpper>
    </S.Layout>
  );
};

export default ClassNoticePage;
