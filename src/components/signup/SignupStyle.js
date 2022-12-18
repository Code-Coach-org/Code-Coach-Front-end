import styled from "styled-components";

export const BackDrop = styled.div`
width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;

export const SignupContainer = styled.div`
    width: 700px;
    height: 1000px;
    background-color: #fff;
    margin: 0 auto;
`;

export const SignupTitleWrap = styled.div`
    width: 270px;
    height: 80px;
    border-bottom: 2px solid ;
    margin: 40px;
    font-size: 30px;
    display: flex;
`;

export const SignupTitleText = styled.div`
    padding: 30px 20px 15px 25px;
    font-weight: 700;
`;

export const SignupSubText = styled.div`
    padding-top: 24px;
    font-size: 26px;
    font-weight: 500;
    color: #78B5EF;
`;

export const InfoWrap = styled.div`
    width: 85%;
    height: 150px;
    margin-left: 40px;
`;

export const EmailInputWrap = styled.div`
    width: 100%;
    height: 50%;
`;

export const EmailInput = styled.input`
    width: 400px;
    height: 8px;
    margin-top: 9px;
    padding: 7px;
`;

export const EmailTitle = styled.div`
    padding-top: 18px;
`;

export const EmailSelect = styled.select`
    margin: 14px;
    width: 100px;
    height: 28px;
`;

export const AuthBtn = styled.button`
    margin-top: 8px;
    width: 75px;
    height: 20px;
    background-color: #78B5EF;
    border: none;
    color: #fff;
    font-size: 14px;
    font-weight: 700;
    cursor: pointer;
`;

export const AuthCodeNumber = styled.input`
    margin-left: 20px;
    width: 420px;
    height: 7px;
    padding: 6px;
`;

export const PasswordInput = styled.input`
    width: 510px;
    height: 8px;
    margin-top: 4px;
    padding: 8px;
`;

export const InfoBtnWrap = styled.div`
    width: 30%;
    height: 40px;
    display: flex;
    justify-content: space-around;
    margin: 0 auto;
`;

export const SignupBtn = styled.button`
  font-size: 18px;
  font-weight: 700;
  padding-top: 8px;
  width: 80px;
  height: 35px;
  border: none;
  color: #fff;
  background-color: #77b5ef;
`