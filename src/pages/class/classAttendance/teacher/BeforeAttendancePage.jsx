import React from "react";
import ClassHeaderComponent from "../../../../components/class/ClassHeader";
import Modal from 'react-modal';
import * as S from "../../../../styles/class/teacherManagementPage/teacherManagementPage.style";
import AttendanceModalComponent from "../../../../components/class/AttendanceModal";

const BeforeAttendancePage = () => {

    const [modalIsOpen, setIsOpen] = React.useState(false);

    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <S.Layout>
            <ClassHeaderComponent />
            <S.FlexWarpper>
                <S.Date>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5m-9-6h.008v.008H12v-.008zM12 15h.008v.008H12V15zm0 2.25h.008v.008H12v-.008zM9.75 15h.008v.008H9.75V15zm0 2.25h.008v.008H9.75v-.008zM7.5 15h.008v.008H7.5V15zm0 2.25h.008v.008H7.5v-.008zm6.75-4.5h.008v.008h-.008v-.008zm0 2.25h.008v.008h-.008V15zm0 2.25h.008v.008h-.008v-.008zm2.25-4.5h.008v.008H16.5v-.008zm0 2.25h.008v.008H16.5V15z" />
                    </svg>
                    2022-02-05
                </S.Date>
                <S.Button onClick={openModal}>
                    출석 시작
                </S.Button>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={S.ModalStyle}
                >
                    <AttendanceModalComponent closeModal={closeModal} />
                </Modal>
            </S.FlexWarpper>
            <S.Schedule>
                <S.ScheduleRow>
                    <S.Item>이름</S.Item>
                    <S.Item>비고</S.Item>
                    <S.Item>출석</S.Item>
                    <S.Item>결석</S.Item>
                    <S.Item>지각</S.Item>
                    <S.Item>조회</S.Item>
                </S.ScheduleRow>
                <S.ScheduleRow>
                    <S.Item>조용제</S.Item>
                    <S.Item>가족 여행</S.Item>
                    <S.Item></S.Item>
                    <S.Item>O</S.Item>
                    <S.Item></S.Item>
                    <S.Item></S.Item>
                </S.ScheduleRow>
            </S.Schedule>
            <S.Result>
                <S.ResultItem>합계: 20</S.ResultItem>
                <S.ResultItem>출석: 11</S.ResultItem>
                <S.ResultItem>결석: 9</S.ResultItem>
                <S.ResultItem>지각: 0</S.ResultItem>
                <S.ResultItem>조회: 0</S.ResultItem>
            </S.Result>
        </S.Layout>
    );
};

export default BeforeAttendancePage;
