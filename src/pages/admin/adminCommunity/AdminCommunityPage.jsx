import React from "react";
import BaseModalComponent from "../../../components/common/BaseModalComponent";
import * as S from "../../../styles/admin/adminCommunity.style";
import * as M from "../../../styles/common/modal.style";
import Modal from "react-modal";

const AdminCommunityPage = () => {
    
    const [boardModalIsOpen, setBoardModalIsOpen] = React.useState(false);
    const [roleModalIsOpen, setRoleModalIsOpen] = React.useState(false);
    const openBoardModal = () => setBoardModalIsOpen(true);
    const closeBoardModal = () => setBoardModalIsOpen(false);
    const openUserModal = () => setRoleModalIsOpen(true);
    const closeUserModal = () => setRoleModalIsOpen(false);

    return (
        <S.Layout>
            <S.TopTitle>게시판 편집</S.TopTitle>
            <S.Side>
                <S.SideHeader>
                    <S.SideTitle>공지사항</S.SideTitle>
                    <S.SideIcon onClick={openBoardModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </S.SideIcon>
                    <Modal
                        isOpen={boardModalIsOpen}
                        onRequestClose={closeBoardModal}
                        style={M.ModalStyle}
                    >
                        <BaseModalComponent closeModal={closeBoardModal} title={"게시판 이름"}/>
                    </Modal>
                </S.SideHeader>
                <S.SideContents>
                    <S.SideContent>홈페이지 이용 안내</S.SideContent>
                    <S.SideContent>수업 공지</S.SideContent>
                    <S.SideContent>모집 공지</S.SideContent>
                </S.SideContents>
                <S.SideHeader>
                    <S.SideTitle>게시판</S.SideTitle>
                    <S.SideIcon>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </S.SideIcon>
                </S.SideHeader>
                <S.SideContents>
                    <S.SideContent>A 게시판</S.SideContent>
                    <S.SideContent>B 게시판</S.SideContent>
                    <S.SideContent>C 게시판</S.SideContent>
                    <S.SideContent>D 게시판</S.SideContent>
                    <S.SideContent>E 게시판</S.SideContent>
                    <S.SideContent>F 게시판</S.SideContent>
                    <S.SideContent>G 게시판</S.SideContent>
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
                    <S.Button onClick={openUserModal}>추가</S.Button>
                    <Modal
                        isOpen={roleModalIsOpen}
                        onRequestClose={closeUserModal}
                        style={M.ModalStyle}
                    >
                        <BaseModalComponent closeModal={closeUserModal} title={"역할 이름"}/>
                    </Modal>
                </S.Search>
                <S.Users>
                    <S.Admin>관리자(수정불가)</S.Admin>
                    <S.User>
                        <S.UserName>
                            32기 교사
                        </S.UserName>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </S.User>
                    <S.User>
                        <S.UserName>
                            32기 학생
                        </S.UserName>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </S.User>
                </S.Users>
            </S.Warpper>
        </S.Layout>
    );
};

export default AdminCommunityPage;
