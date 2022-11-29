import React from "react";
import { useParams } from "react-router";
import { NavLink } from "react-router-dom";
import * as S from '../../styles/class/classCurriculum/classCurriculum.style';

const ClassHeaderComponent = () => {

  const { classId } = useParams();

  return (
    <S.Contents>
      <S.Content>정규교육 6주 과정</S.Content>
      <S.ContentTitle>언플러그드 강의</S.ContentTitle>
      <NavLink to={`/class/${classId}/notice`}>공지사항</NavLink>
      <NavLink to={`/class/${classId}/curriculum`}>커리큘럼</NavLink>
      <NavLink to={`/class/${classId}/report`}>보고서</NavLink>
      <NavLink to={`/class/${classId}/attendance`}>출석</NavLink>
    </S.Contents>
  );
};

export default ClassHeaderComponent;
