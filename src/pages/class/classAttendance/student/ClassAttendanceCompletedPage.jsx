import React from "react";
import ClassHeaderComponent from "../../../../components/class/ClassHeader";
import * as S from "../../../../styles/class/classAttendance/classAttendance.style"; 

const ClassAttendanceCompletedPage = ({ title }) => {

    return (
        <S.Layout>
            <ClassHeaderComponent />
            <S.Warpper>
                <S.Date>
                    2022-02-05
                </S.Date>
                <S.Title>
                    {title}
                </S.Title>
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

export default ClassAttendanceCompletedPage;
