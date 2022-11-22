import styled from "styled-components";

const maincolor = "#E9E9E9";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Wapper = styled.div`
  width: 90%;
  display: flex; 
  flex-direction: column;
`;

export const Title = styled.div`
  margin-top: 4rem;
  font-size: 2rem;
  border-bottom: 1px solid black;
`;

export const CardWrapper = styled.div`
  height: 10rem;
  display: flex;
  overflow-x: scroll;
  white-space: nowrap;
  gap: 2rem;
  margin-top: 1rem;
`;

export const Card = styled.div`
  width: 12rem;
  background-color: ${maincolor};
  display: flex;
  align-items: center;
  justify-content: center;
`
