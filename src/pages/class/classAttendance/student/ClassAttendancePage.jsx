import React, { useEffect } from "react";
import { useState } from "react";
import ReactCodeInput from "react-code-input";
import ClassHeaderComponent from "../../../../components/class/ClassHeader";
import * as S from "../../../../styles/class/classAttendance/classAttendance.style";

const ClassAttendancePage = () => {

    // TODO :: 남은 횟수 서버 저장 
    const [remaining, setRemaining] = useState(10);
    const [code, setCode] = useState("");
    const [btnClickable, setBtnClickable] = useState(false);

    const CODE_LENGTH = 4;
    const CORRECT_PIN_CODE = "111111";

    const checkCode = () => {
        const isPinCodeValid = code === CORRECT_PIN_CODE;
        if (!isPinCodeValid) {
            setRemaining(prev => prev - 1);
            setCode("");
        }
    };

    const handleCodeChange = Code => {
        setCode(Code);
    };

    useEffect(() => {
        if (code.length < CODE_LENGTH) {
            setBtnClickable(false);
        }
        else if (remaining === 0) {
            setBtnClickable(false);
        }
        else {
            setBtnClickable(true);
        }
    }, [remaining, code])

    return (
        <S.Layout>
            <ClassHeaderComponent />
            <S.Warpper>
                <S.Date>
                    <S.Today>2022-11-15</S.Today>
                    <S.Time>03:20</S.Time>
                </S.Date>
                <S.Input>
                    <ReactCodeInput
                        fields={CODE_LENGTH}
                        onChange={handleCodeChange}
                        value={code}
                    />
                </S.Input>
                <S.ButtonWarpper>
                    <S.Remaining>남은 횟수: {remaining}</S.Remaining>
                    <S.Button
                        onClick={checkCode}
                        btnClickable={btnClickable}
                    >
                        출석&nbsp;
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
