import styled from "styled-components";
import { MAIN_COLOR } from "../constants/color.constant";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  margin-top: 2rem;
`

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${MAIN_COLOR};
  width: 25rem;
  height: 30rem;
`

export const Title = styled.div`
  font-weight: 500;
  font-size: 1.2rem;
  padding: 1rem;
  border-bottom: 2px solid #D9D9D9;
`

export const Content = styled.div`
  padding: 1rem;
`