import React from "react";
import * as S from "../../../styles/admin/adminCommunity.style";

const AdminCommunityPage = () => {

    return (
        <S.Layout>
            <S.Title>게시판 편집</S.Title>
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

            </S.Warpper>
        </S.Layout>
    );
};

export default AdminCommunityPage;
