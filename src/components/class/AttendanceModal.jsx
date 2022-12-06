import React from "react";
import * as S from "../../styles/class/teacherManagementPage/teacherManagementPage.style";

const AttendanceModalComponent = ({ closeModal }) => {

    return (
        <S.ModalWrapper>
            <S.Back onClick={closeModal}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </S.Back>
            <S.InputWrapper>
                <S.Label>제한 시간</S.Label>
                <S.Input value="05:00"></S.Input>
            </S.InputWrapper>
            <S.InputWrapper>
                <S.Label>제한 횟수</S.Label>
                <S.Input value="10"></S.Input>
            </S.InputWrapper>
            <S.ModalButton>
                시작
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                </svg>
            </S.ModalButton>
        </S.ModalWrapper>
    );
};

export default AttendanceModalComponent;
