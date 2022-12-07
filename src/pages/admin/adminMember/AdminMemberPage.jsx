import React from "react";
import * as S from "../../../styles/admin/member/adminMember.style";
const AdminMemberPage = () => {

    return (
        <S.Layout>
            <S.Title>회원 명부 관리</S.Title>
            <S.Side>
                <S.SideHeader>
                    <S.SideTitle>그룹별 보기</S.SideTitle>
                    <>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                    </svg>
                    </>
                </S.SideHeader>
                <>
                    <></>
                    <></>
                    <></>
                </>
            </S.Side>
            <>
                <>
                    <>전체</>
                    <>추가하기</>
                </>
                <>
                    <>
                        <>이름</>
                        <>닉네임</>
                        <>이메일</>
                        <>가입일</>
                        <></>
                    </>
                    <>
                        <>001</>
                        <>김도균</>
                        <>sample@sam.ple</>
                        <>20xx.xx.xx</>
                        <></>
                    </>
                </>
            </>
        </S.Layout>
    );
};

export default AdminMemberPage;
