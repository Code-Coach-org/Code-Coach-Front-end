import styled from "styled-components";
import { ANCHOR_ACTIVE_COLOR } from "../constants/color.constant";

export const Frame = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #ededed;
`;

export const HeaderBox = styled.div`
  width: 90%;
  background-color: #ededed;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const NavList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;

  > a {
    text-decoration: none;
  }

  > a:not(.active) {
    color: black;
  }

  > a:hover {
    color: ${ANCHOR_ACTIVE_COLOR};
  }
  
`;

export const LoginBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 15%;
`;

export const Btn = styled.button`
  background-color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
`;

export const Logo = styled.div`
  
`;
