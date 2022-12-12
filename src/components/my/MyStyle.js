import styled from "styled-components";

export const MyContainer = styled.div`
  width: 1200px;
  height: 600px;
  margin: 0 auto;
  background-color: #fff;
`;

export const MyHeader = styled.div`
  width: 1100px;
  height: 50px;
  background-color: #fff;
  border-bottom: 2px solid #333;
  font-size: 30px;
  font-weight: 700;
  padding-top: 25px;
  padding-left: 16px;
`;

export const MyInfo = styled.div`
  width: 100%;
  height: 550px;
  background-color: #fff;
  display: flex;
`;

export const MyCategory = styled.div`
  width: 230px;
  height: 220px;
  /* padding-top: 40px; */
  margin-top: 70px;
  background-color: #e9e9e9;
`;

export const MyInfoTab = styled.div`
  width: 100%;
  height: 40px;
  margin-bottom: 6px;
  text-align: center;
  font-size: 18px;
  padding-top: 14px;
  background-color: #e9e9e9;
  font-weight: 500;
  /* margin: 0 auto; */
`;

export const MyProfileWrap = styled.div`
  width: 700px;
  height: 100%;
  margin-left: 30px;
  background-color: #fff;
`;

export const MyImgWrap = styled.div`
  width: 100%;
  height: 38%;
  /* margin-top: 20px; */
  /* display: flex; */
  /* background-color: ; */
`;

export const MyProfileText = styled.p`
  margin-top: 30px;
  font-size: 20px;
  margin-bottom: 0;
`;

export const MyProfileImg = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  margin-left: 70px;
  background-color: antiquewhite;
`;

export const MyInfoTextWrap = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  display: flex;
  /* background-color: pink; */
`;

export const MyText = styled.div`
  width: 100px;
  padding-top: 15px;
`;

export const MyInput = styled.input`
  margin-left: 30px;
  width: 450px;
  height: 20px;
  margin-top: 12px;
`;

export const MyNickNameWrap = styled.div`
  width: 100%;
  height: 50px;
  margin-top: 10px;
  display: flex;
  /* background-color: pink; */
`;

export const MyInfoBtntWrap = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 35px;
  /* background-color: aqua; */
`;

export const MyEmailInfo = styled.div`
  width: 250px;
  height: 30px;
  padding-top: 15px;
  margin-left: 25px;
  /* background-color: blanchedalmond; */
`;

export const PasswordChange = styled.button`
  float: right;
  width: 120px;
  height: 35px;
  text-align: center;
  padding-top: 8px;
  background-color: #ffc165;
  font-size: 18px;
  font-weight: 700;
  color: #fff;
  border: none;
`;

export const Complete = styled.button`
  /* text-align: center; */
  font-size: 20px;
  padding-top: 8px;
  padding-left: 8px;
  float: right;
  width: 80px;
  height: 35px;
  margin-left: 25px;
  border: none;
  color: #fff;
  background-color: #77b5ef;
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


export const ModalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: row wrep;
  justify-content: center;
  align-items: center;
`;



export const LogoWrap = styled.div`
  padding-left: 370px;
  .logo {
    cursor: pointer;
  }
`;

export const PasswordWrap = styled.div`
  display: flex;
  width: 350px;
  height: 50px;
  border-bottom: 2px solid #78B5EF;
  margin: 45px 30px 0;
`;

export const PasswordText = styled.div`
  width: 100px;
  height: 60%;
  padding-top: 20px;
  font-weight: 700;
`;

export const NewPasswordInput = styled.input`
  width: 250px;
  margin-top: 17px;
  height: 20px;
  border: none;
  outline: none;
  font-size: 18px;
  &:focus{
    outline: none;
  }
`;

export const ModalView = styled.div.attrs(props => ({
  role: 'dialog'
}))`
  width: 400px;
  height: 400px;
  text-align: center;
  text-decoration: none;
  background-color: white;
  padding: 16px;
  color: #333;
`;