import React from "react";
import * as S from "../../styles/admin/adminMain.style";
import { Link } from "react-router-dom";
const AdminMainPage = () => {

    return (
        <S.Layout>
            <S.Card>
                <S.Title>회원 관리</S.Title>
                <S.Content>
                    <Link to="member">
                        회원 명부 관리
                    </Link>
                </S.Content>
            </S.Card>
            <S.Card>
                <S.Title>커뮤니티 관리</S.Title>
                <S.Content>
                    <Link to="community">
                        게시판 편집
                    </Link>
                </S.Content>
            </S.Card>
            <S.Card>
                <S.Title>수업 관리</S.Title>
                <S.Content>
                    <Link to="class">
                        수업 편집
                    </Link>
                </S.Content>
            </S.Card>
        </S.Layout>
    );
};

export default AdminMainPage;
