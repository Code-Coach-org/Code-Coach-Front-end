import styled from "styled-components";

export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
`;

export const ModalBtn = styled.button`
  background-color: #4000c7;
  text-decoration: none;
  border: none;
  padding: 20px;
  color: white;
  border-radius: 30px;
  cursor: grab;
`;

export const ModalBackdrop = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
`;


export const TitleBox = styled.div`
    width: 40%;
    height: 100%;
    background-color: #77b5ef;
`;

export const LoginContent = styled.div`
    width: 60%;
    height: 100%;
`

export const LoginContentHeader = styled.div`
    width: 100%;
    height: 30px;
    display: flex;
`;

export const HeaderText = styled.div`
    width: 200px;
    padding-left: 30px;
    padding-top: 12px;
    font-size: 11px;
`;

export const SignupBtn = styled.button`
    width: 130px;
    height: 25px;
    margin-right: 15px;
    margin-top: 6px;
    border: none;
    background-color: #77b5ef;
    color: #fff;
    font-weight: 300;
    font-size: 12px;
`;

export const LoginInfoWrap = styled.div`
    width: 220px;
    height: 150px;
    margin: 25px;
    padding-top: 30px;
`;

export const InputWrap = styled.div`
    width: 100%;
    height: 40px;
    border-bottom: 2px solid  #77b5ef;
    margin-bottom: 10px;
    display: flex;
`
export const LogoWrap = styled.div`
    width: 50px;
    padding-top: 15px;
`;

export const LoginBtn = styled.button`
  width: 80px;
  height: 25px;
  margin-top: 6px;
  margin-bottom: 5px;
  border: none;
  background-color: #77b5ef;
  color: #fff;
  font-weight: 300;
  font-size: 12px;

`;

export const FPassword = styled.p`
font-size: 10px;
`;

export const InfoInput = styled.input`
    height: 50%;
    margin-top: 15px;
    outline: none;
    border: none;
`;

export const ModalView = styled.div.attrs(props => ({
    role: 'dialog'
  }))`
    width: 450px;
    height: 300px;
    display: flex;
    text-align: center;
    text-decoration: none;
    background-color: white;
  `;
  

  