import styled from "styled-components";
import { ANCHOR_ACTIVE_COLOR } from "../../constants/color.constant";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Warpper = styled.div`
  display: grid;
  width: 95%;
  grid-template-columns: 1fr 1fr 1fr;
  padding: 2rem 0;
`

export const Date = styled.div`
  font-size: 1.5rem;
  display: flex; 
  font-weight: 600;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  > svg {
    width: 2rem;
  }
`

export const Time = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-weight: 600;
`

export const Number = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 3rem;
  font-weight: 600;
`

export const Schedule = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  border-top: 2px solid black;
`

export const ScheduleRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 5fr 1fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  padding: .5rem 0;
  border-bottom: 1px solid black;
  /* align-items: center; */
`

export const Item = styled.div`
  text-align: center;
  width: 100%;
`
export const Result = styled.div`
  width: 95%;
  display: flex;
  border-bottom: 1px solid black;
  padding: 1rem 0rem;
`

export const ResultItem = styled.div`
  margin: 0rem 2rem;
`

export const Button = styled.div`
  background-color: #77AEEF;
  color: white;
  padding: .2rem .5rem;
`

export const FlexWarpper = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  padding: 2rem 0;
  align-items: center;
`