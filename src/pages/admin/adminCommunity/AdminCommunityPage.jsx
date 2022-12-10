import React from "react";
import * as S from "../../../styles/admin/adminCommunity.style";

const AdminCommunityPage = () => {

    return (
        <S.Layout>
            <S.TopTitle>게시판 편집</S.TopTitle>
            <S.Side>
                <S.SideHeader>
                    <S.SideTitle>공지사항</S.SideTitle>
                    <S.SideIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </S.SideIcon>
                </S.SideHeader>
                <S.SideContents>
                    <S.SideContent>홈페이지 이용 안내</S.SideContent>
                    <S.SideContent>수업 공지</S.SideContent>
                    <S.SideContent>모집 공지</S.SideContent>
                </S.SideContents>
            </S.Side>
            <S.Warpper>
                <S.Title>B 게시판</S.Title>
                <S.Auths>
                    <S.Auth>이 게시판을 읽을 수 있는 역할(R)</S.Auth>
                    <S.Auth>이 게시판에 글을 쓰고 지울 수 있는 역할(CRUD)</S.Auth>
                    <S.Auth>댓글 허용 여부</S.Auth>
                    <S.Auth>이 게시판에 댓글을 쓰고 지울 수 있는 역할(CRUD)</S.Auth>
                </S.Auths>
                <S.Search>
                    <S.Label>역할 검색</S.Label>
                    <S.Input></S.Input>
                    <S.Button>추가</S.Button>
                </S.Search>
                <S.Users>
                    <S.Admin>관리자(수정불가)</S.Admin>
                    <S.User>
                        32기 교사
                    </S.User>
                    <S.User>
                        32기 학생
                    </S.User>
                </S.Users>
            </S.Warpper>
        </S.Layout>
    );
};

export default AdminCommunityPage;
