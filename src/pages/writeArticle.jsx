import React from "react";
import styled from "styled-components";
import * as S from "../styles/community/community.style";
import { useNavigate } from "react-router";
import { Editor } from '@tinymce/tinymce-react';
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import instanceWithToken from "../components/api/axiosWithToken.instance";

export const WriteArticle = ({ subject }) => {

    useEffect(() => {
        setValue("boardId", subject);
    }, [subject])

    const { register, handleSubmit, formState: { isSubmitting }, setValue } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        console.log(data);
        await instanceWithToken.post("/api/board/create/article", {...data});
        navigate(`/community/${subject}`)
    }

    const handleEditorChange = (content) => {
        setValue("content", content);
    };

    return <S.Warpper onSubmit={handleSubmit(onSubmit)}>
        <S.Header>
            <S.All>
                <S.Label>제목</S.Label>
                <S.Input {...register("title")}></S.Input>
            </S.All>
            <S.Submit type="submit" disabled={isSubmitting}>
                {isSubmitting? "작성 중.." : "작성"}
            </S.Submit>
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
            onEditorChange={handleEditorChange}
        />
    </S.Warpper>
};

export default WriteArticle;