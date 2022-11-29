import React from "react";
import ClassHeaderComponent from "../../../components/class/ClassHeader";
import * as S from "../../../styles/class/classAttendance/classAttendance.style";

const ClassAttendancePage = () => {

    const EXAMPLE_PDF_URL = "https://github.com/Code-Coach-org/Code-Coach-Front-end/files/10072275/1.pdf";

    return (
        <S.Layout>
            <ClassHeaderComponent />
            <>
                <>
                    <></>
                    <></>
                </>
                <></>
                <>
                    <></>
                    <></>
                </>
            </>
            <>
                <>
                    <>날짜</>
                    <>출석</>
                    <>결석</>
                    <>지각</>
                    <>조회</>
                </>
                <>
                    <>합계: 20</>
                    <>출석: 11</>
                    <>결석: 9</>
                    <>지각: 0</>
                    <>조회: 0</>
                </>
            </>
        </S.Layout>
    );
};

export default ClassAttendancePage;
