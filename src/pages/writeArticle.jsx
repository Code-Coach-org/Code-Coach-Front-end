import React from "react";
import styled from "styled-components";
import * as S from "../styles/community/community.style";
import { useNavigate } from "react-router";
import { Editor } from '@tinymce/tinymce-react';
import { useForm } from "react-hook-form";

export const WriteArticle = ({ subject }) => {

    const navigate = useNavigate();
    const { register, handleSubmit, formState: { isSubmitting, errors } } = useForm();

    return <S.Warpper>
        <S.Header>
            <S.All>제목</S.All>
            <input {...register("title")}></input>
            {subject && <S.Add onClick={() => navigate('write')}>작성하기</S.Add>}
        </S.Header>
        <Editor
            apiKey="qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"
            init={{
                skin: "snow",
                icons: "thin",
                placeholder: "Ask a question or post an update...",
                height: 500,
                menubar: true,
                plugins: [
                    "advlist autolink lists link image charmap print preview anchor",
                    "searchreplace visualblocks code fullscreen textcolor ",
                    "insertdatetime media table paste code help wordcount",
                    "codesample"
                ],
                textcolor_rows: "4",
                codesample_global_prismjs: true,
                toolbar:
                    "undo redo codesample| styleselect | fontsizeselect | code | bold italic | alignleft aligncenter alignright alignjustify | outdent indent"
            }}
            // onEditorChange={handleEditorChange}
        />
    </S.Warpper>
};

export default WriteArticle;

const Frame = styled.div`
  display: flex;
  margin-left: 40px;
  margin-top: 25px;
  column-gap: 10px;
  width: 90%;
  height: 100%;
`;
