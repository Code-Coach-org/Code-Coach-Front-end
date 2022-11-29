import React from "react";
import ClassHeaderComponent from "../../../components/class/ClassHeader";
import * as S from '../../../styles/class/classMain/classMain.style';

const ClassCurriculumPage = () => {

  const EXAMPLE_PDF_URL = "https://github.com/Code-Coach-org/Code-Coach-Front-end/files/10072275/1.pdf";

  return (
    <S.Layout>
      <ClassHeaderComponent />
      <S.Methods>
        <S.Method>업로드</S.Method>
        <S.Method>다운로드</S.Method>
      </S.Methods>
      <a href={EXAMPLE_PDF_URL}>PDF링예시</a>
    </S.Layout>
  );
};

export default ClassCurriculumPage;
