import React from "react";
import ClassHeaderComponent from "../../../components/class/ClassHeader";
import ClassReportWrapperComponent from "../../../components/class/ClassReportWrapper";
import * as S from '../../../styles/class/classReport/classReport.style'

const ClassReportPage = () => {

  return (
    <S.Layout>
      <ClassHeaderComponent />
      <S.Warpper>
        <S.TitleWarpper>
          <S.Title>보고서</S.Title>
          <S.Button>작성하기</S.Button>
        </S.TitleWarpper>
        <S.Reports>
          <S.ReportHeader>
            <div>
            </div>
            <div>
              제목
            </div>
            <div>
              작성일
            </div>
            <div>
              작성자
            </div>
            <div>
              조회
            </div>
          </S.ReportHeader>
          <ClassReportWrapperComponent />
          <ClassReportWrapperComponent />
        </S.Reports>
      </S.Warpper>
    </S.Layout>
  );
};

export default ClassReportPage;
