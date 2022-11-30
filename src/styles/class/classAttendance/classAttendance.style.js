import styled from "styled-components";
import { ANCHOR_ACTIVE_COLOR } from "../../constants/color.constant";

export const Layout = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const Warpper = styled.div`
  display: flex;
  width: 95%;
  justify-content: space-between;
  align-items: center;
`

export const Date = styled.div`
  display: flex;
  flex-direction: column;
`

export const Today = styled.div`
  font-size: 1.5em;
`

export const Time = styled.div`
  font-size: 3rem;
  font-weight: 600;
`

export const ButtonWarpper = styled.div`
  display: flex;
  flex-direction: column;
`

export const Remaining = styled.div`
  
`

export const Button = styled.button`
  display: flex;
  height: 2rem;
  width: 4rem;
  background-color: ${({btnClickable}) => (btnClickable ? '#77AEEF' : 'gray')};
  border: none;
  color: white;
  align-items: center;
  justify-content: center;
  pointer-events : ${({btnClickable}) => (btnClickable ? 'auto' : 'none')};
  cursor : ${({btnClickable}) => (btnClickable ? 'pointer' : 'none')};
  > svg {
    width: 1rem;
  }
`
 
export const Schedule = styled.div`
  width: 95%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
`

export const ScheduleRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 10fr 1fr 1fr 1fr 1fr;
  justify-items: center;
  padding: .5rem 0;
  border-top: 1px solid black;
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