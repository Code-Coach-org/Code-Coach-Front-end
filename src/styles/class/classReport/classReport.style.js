import styled from "styled-components";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Warpper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const TitleWarpper = styled.div`
  width: 95%;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid black;
  align-items: center;
  padding: 1rem 0;
`

export const Title = styled.div`
  font-size: 2rem;
  font-weight: 600;
`;

export const Button = styled.div`
  cursor: pointer;
  margin-top: 2rem;
  text-decoration: underline;
`;

export const Reports = styled.div`
  width: 95%;
`
export const ReportHeader = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  border-bottom: 1px solid black;
  padding: 1rem 0;
`;

export const ReportWrapper = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
  border-bottom: 1px solid black;
  padding: 1rem 0;
`

