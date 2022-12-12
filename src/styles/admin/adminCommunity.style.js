import styled from "styled-components";
import { MAIN_COLOR } from "../constants/color.constant";

export const Layout = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
`

export const TopTitle = styled.div`
  font-size: 2rem;
  width: 100%;
  margin: 2rem 0 0 6rem;
`

export const Side = styled.div` 
  position: absolute;
  left: 3rem;
  top: 6rem;
  display: flex;
  flex-direction: column;
  width: 10rem;
  background-color: ${MAIN_COLOR};
  padding: 1rem;
`

export const SideHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-bottom: 2px solid #DBDBDB;
`

export const SideTitle = styled.div`
  font-weight: 600;
  padding: .3rem 0 .3rem 0;
`

export const SideIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 1rem;
`

export const SideContents = styled.div`
  display: flex;
  flex-direction: column;
`

export const SideContent = styled.div`
  padding: .2rem 0 .2rem 0;
`

export const Warpper = styled.div`
  margin-left: 17rem;
  width: 80%;
`

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Member = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid black;
  border-top: 2px solid black;
`

export const MemberRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr 2fr 2fr 2fr 2fr;
  justify-items: center;
  padding: .5rem 0;
  border-bottom: 1px solid black;
`

export const Item = styled.div`
  text-align: center;
  width: 100%;
  > svg {
    width: 1rem;
  }
`

export const All = styled.div`
  font-weight: 600;
  font-size: 2rem;
`

export const Add = styled.div`
  text-decoration: underline;
`

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: 550;
`

export const Auths = styled.div`
  display: flex;   
  gap: 1rem;
  padding: 1rem 0;
`

export const Auth = styled.div`
  font-size: .9rem;
`

export const Search = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 2rem;
  border-top: 1px solid #D9D9D9;
  border-bottom: 1px solid #D9D9D9;
  padding: .5rem 0;
`

export const Label = styled.div`
  font-size: .8rem;
`

export const Input = styled.input`
  width: 50%;
`

export const Button = styled.div`
  font-size: .8rem;
`

export const Users = styled.div`
  
`

export const Admin = styled.div`
  color: gray;
  font-size: 1.3rem;
  padding: .5rem;
`

export const UserName = styled.div`
  
`

export const User = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  padding: .5rem;
  > svg {
    width: 1.5rem;
  }
`