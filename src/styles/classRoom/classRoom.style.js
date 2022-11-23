import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Contents = styled.div`
  width: 90%;
  display: flex;
  border-bottom: 1px solid black;
  padding: 2rem;
  gap: 2rem;
`

export const Content = styled.div`
  font-size: 1rem;
`

export const ContentTitle = styled(Content)`
  font-size: 2rem;
  font-weight: 600;
`

export const Methods = styled.div`
  width: 90%;
  display: flex;
  border-bottom: 1px solid black;
  padding: 2rem;
  gap: 2rem;
  justify-content: flex-end;
`

export const Method = styled.div`
  // TODO :: pdf업로드 구현시 추가
`

export const PDF = styled.a`

`