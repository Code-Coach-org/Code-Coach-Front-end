import React from "react";
import styled from "styled-components";
import { SideNav } from "./sideNav";
import { useParams } from "react-router";
import { useEffect } from "react";
import { useState } from "react";
import instanceWithToken from "../components/api/axiosWithToken.instance";
import { escapeAttrValue, FilterXSS } from 'xss';
import { useForm } from "react-hook-form";

export const ArticleInfo = () => {

    const { register, handleSubmit } = useForm();
    const codeblockRegexp = /^(language.*)/;
    const postXssFilter = new FilterXSS({
        onIgnoreTagAttr: (tag, name, value) => {
            if (name === 'style') return `${name}="${escapeAttrValue(value)}"`;
            if (tag === 'img') {
                if (name === 'e_id') return `${name}="${escapeAttrValue(value)}"`;
                if (name === 'e_idx') return `${name}="${escapeAttrValue(value)}"`;
                if (name === 'e_type') return `${name}="${escapeAttrValue(value)}"`;
            }
            if (tag === 'pre' && codeblockRegexp.test(value)) return `${name}="${escapeAttrValue(value)}"`;
        },
        onIgnoreTag: (tag, html) => {
            if (tag === 'iframe') return html;
        }
    });

    const { co_id, ar_id } = useParams();
    const [boards, setBoards] = useState();
    const [article, setArticle] = useState();
    useEffect(() => {
        const getAllBoards = async () => {
            const boards = await instanceWithToken.get('api/board/all');
            setBoards(boards.data);
        }
        const getArticle = async () => {
            const articles = await instanceWithToken.get(`api/board/${co_id}/${ar_id}`);
            setArticle(articles.data);
        }
        getAllBoards();
        getArticle();
    }, [co_id, ar_id]);

    const onSubmit = async (data) => {
        await instanceWithToken.post('api/comment', {
            ...data,
            articleId: ar_id
        });
        alert("댓글 작성이 완료되었습니다.");
        window.location.reload();
    }

    return (
        <Frame>
            <SideNav boards={boards} />
            <PostInfo>
                <Title>{article?.title}</Title>
                <Content dangerouslySetInnerHTML={{ __html: postXssFilter.process(article ? article.content : "") }}></Content>
                {article?.comment.map((item) => {
                    return (
                        <Comment>
                            {item.content}
                            {item.name}
                        </Comment>
                    )
                })}
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input {...register("content")}></Input>
                    <InputBtn>댓글 입력</InputBtn>
                </Form>
            </PostInfo>
        </Frame>
    );
};

export default ArticleInfo;

const Frame = styled.div`
    display: flex;
    /* flex-direction: column; */
    margin-left: 40px;
    margin-top: 25px;
    column-gap: 10px;
    width: 90%;
    height: 100%;
`;

const PostInfo = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`

const Content = styled.div`
    padding: 1rem;
    min-height: 50rem;
`

const Title = styled.div`
    display: flex;
    font-size: 2rem;
    border-bottom: 1px solid black;
    width: 100%;
    padding: 1rem;
`

const Comment = styled.div`
    padding: .5rem 1rem;
`

const Form = styled.form`
    padding: 1rem;
    display: flex;
    align-items: center;
`

const Input = styled.input`
    /* padding: 1rem; */
`

const InputBtn = styled.button`
    /* padding: 1rem; */
`



