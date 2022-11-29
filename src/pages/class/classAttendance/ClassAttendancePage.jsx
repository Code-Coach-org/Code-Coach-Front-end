import React from "react";
import { useState } from "react";
import ReactCodeInput from "react-code-input";
import ClassHeaderComponent from "../../../components/class/ClassHeader";
import * as S from "../../../styles/class/classAttendance/classAttendance.style"; 

const ClassAttendancePage = () => {

    // TODO :: 남은 횟수 서버 저장 
    const [isCodeValid, setCodeValid] = useState(10);
    const [code, setCode] = useState("");
    const [btnIsPressed, setBtnIsPressed] = useState(false);    

    const CORRECT_PIN_CODE = "111111";

    const checkCode = () => {
        const isPinCodeValid = code === CORRECT_PIN_CODE;
    
        setBtnIsPressed(true);
        setCodeValid(prev => prev-1);
        if (!isPinCodeValid) setCode("");
    };

    const handleCodeChange = Code => {
        setCode(Code);
        setBtnIsPressed(false);
      };

    return (
        <S.Layout>
            <ClassHeaderComponent />
            <S.Warpper>
                <S.Date>
                    <S.Today>2022-11-15</S.Today>
                    <S.Time>03:20</S.Time>
                </S.Date>
                <ReactCodeInput
                    fields={4}
                    onChange={handleCodeChange}
                    value={code}
                />
                <S.ButtonWarpper>
                    <S.Remaining>남은 횟수: 7</S.Remaining>
                    <S.Button>
                        출석 
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </S.Button>
                </S.ButtonWarpper>
            </S.Warpper>
            <S.Schedule>
                <S.ScheduleRow>
                    <S.Item>날짜</S.Item>
                    <S.Item>출석</S.Item>
                    <S.Item>결석</S.Item>
                    <S.Item>지각</S.Item>
                    <S.Item>조회</S.Item>
                </S.ScheduleRow>
                <S.ScheduleRow>
                    <S.Item>2022-11-11</S.Item>
                    <S.Item>O</S.Item>
                    <S.Item></S.Item>
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

export default ClassAttendancePage;
