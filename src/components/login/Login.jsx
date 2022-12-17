// 로그인 모달창 생성
import * as _ from "./LoginStyle";
import { useState } from "react";
import {HiOutlineKey} from "react-icons/hi"
import {TfiEmail} from "react-icons/tfi"



export const LoginModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const openModalHandler = () => {
        setIsOpen(!isOpen);
      };

  return (
    <>
      <_.ModalContainer>
        <_.ModalBtn onClick={openModalHandler}>
          {isOpen ? "Opened !" : "Open Modal"}
        </_.ModalBtn>
        {isOpen ? (
          <_.ModalBackdrop  >
            <_.ModalView>
                <_.TitleBox>코드코치 슬로건과 로고</_.TitleBox>
                <_.LoginContent>
                    <_.LoginContentHeader>
                        <_.HeaderText>Don't have an account?</_.HeaderText>
                        <_.SignupBtn>Create Profile</_.SignupBtn>
                    </_.LoginContentHeader>
                    <_.LoginInfoWrap>
                        <_.InputWrap>
                            <_.LogoWrap>
                                <TfiEmail/>
                            </_.LogoWrap>
                            <_.InfoInput type="email"/>
                        </_.InputWrap>
                        <_.InputWrap>
                            <_.LogoWrap>
                            <HiOutlineKey/>
                            </_.LogoWrap>
                            <_.InfoInput type="password"/>
                        </_.InputWrap>
                        <_.LoginBtn>Log in</_.LoginBtn>
                        <_.FPassword>Forgot password?</_.FPassword>
                    </_.LoginInfoWrap>
                </_.LoginContent>
            </_.ModalView>
          </_.ModalBackdrop>
        ) : null}
      </_.ModalContainer>
    </>
  );
};
