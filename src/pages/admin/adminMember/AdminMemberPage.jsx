import React from "react";
import BaseModalComponent from "../../../components/common/BaseModalComponent";
import * as S from "../../../styles/admin/adminMember.style";
import * as M from "../../../styles/common/modal.style";
import Modal from "react-modal";
const AdminMemberPage = () => {
    
    const [groupModalIsOpen, setGroupModalIsOpen] = React.useState(false);
    const [userModalIsOpen, setUserModalIsOpen] = React.useState(false);
    const openGroupModal = () => setGroupModalIsOpen(true);
    const closeGroupModal = () => setGroupModalIsOpen(false);
    const openUserModal = () => setUserModalIsOpen(true);
    const closeUserModal = () => setUserModalIsOpen(false);

    return (
        <S.Layout>
            <S.Title>회원 명부 관리</S.Title>
            <S.Side>
                <S.SideHeader>
                    <S.SideTitle>그룹별 보기</S.SideTitle>
                    <S.SideIcon onClick={openGroupModal}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                        </svg>
                    </S.SideIcon>
                    <Modal
                        isOpen={groupModalIsOpen}
                        onRequestClose={closeGroupModal}
                        style={M.ModalStyle}
                    >
                        <BaseModalComponent closeModal={closeGroupModal} title={"그룹 이름"}/>
                    </Modal>
                </S.SideHeader>
                <S.SideContents>
                    <S.SideContent>전체</S.SideContent>
                    <S.SideContent>관리자</S.SideContent>
                    <S.SideContent>교사</S.SideContent>
                </S.SideContents>
            </S.Side>
            <S.Warpper>
                <S.Header>
                    <S.All>전체</S.All>
                    <S.Add onClick={openUserModal}>추가하기</S.Add>
                    <Modal
                        isOpen={userModalIsOpen}
                        onRequestClose={closeUserModal}
                        style={M.ModalStyle}
                    >
                        <BaseModalComponent closeModal={closeUserModal} title={"유저 이메일"}/>
                    </Modal>
                </S.Header>
                <S.Member>
                    <S.MemberRow>
                        <S.Item>번호</S.Item>
                        <S.Item>이름</S.Item>
                        <S.Item>닉네임</S.Item>
                        <S.Item>이메일</S.Item>
                        <S.Item>가입일</S.Item>
                        <S.Item></S.Item>
                    </S.MemberRow>
                    <S.MemberRow>
                        <S.Item>001</S.Item>
                        <S.Item>김도균</S.Item>
                        <S.Item></S.Item>
                        <S.Item>sample@sam.ple</S.Item>
                        <S.Item>20xx.xx.xx</S.Item>
                        <S.Item>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </S.Item>
                    </S.MemberRow>
                    <S.MemberRow>
                        <S.Item>002</S.Item>
                        <S.Item>김소희</S.Item>
                        <S.Item></S.Item>
                        <S.Item></S.Item>
                        <S.Item></S.Item>
                        <S.Item>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                            </svg>
                        </S.Item>
                    </S.MemberRow>
                </S.Member>
            </S.Warpper>
        </S.Layout>
    );
};

export default AdminMemberPage;
