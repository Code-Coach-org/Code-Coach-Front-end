import styled from "styled-components";

export const ModalWrapper = styled.form`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  height: 100%;
  justify-content: center;
`

export const Button = styled.button`
  background-color: #77AEEF;
  color: white;
  padding: .2rem .5rem;
  border: none;
  cursor: pointer;
  :focus {
    outline: none;
  }
`

export const InputWrapper = styled.div`
  margin-bottom: 2rem;
  border-bottom: 3px solid #77AEEF;
  width: 100%;
`

export const Label = styled.span`
  width: 100%;
  >svg {
    margin-left: .3rem;
    width: 1rem; 
  }
`;

export const Input = styled.input`
  border: none;
  width: 100%;
  height: 2rem;
  &:focus {
    outline: none;
  }
`

export const Back = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2rem;
`

export const ForgetPassword = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  display: flex;
  gap: .3rem;
  align-items: center;
`

export const Text = styled.div`
  font-size: .8rem;

`

export const ModalButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  display: flex;
  /* width: 4rem; */
  > svg {
    width: 1rem;
  }
`

export const ModalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    width: "20rem",
    height: "12rem",
    margin: "auto",
    overflowX: "hidden",
  },
}

export const ModalStyleBig = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  content: {
    width: "30rem",
    height: "18rem",
    margin: "auto",
    overflowX: "hidden",
  },
}
