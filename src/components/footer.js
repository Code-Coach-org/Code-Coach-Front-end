import {
  FooterContainer,
  FooterLeft,
  LeftLogo,
  FooterRight,
  RightInfo,
  Contact,
} from "../styles/footer.style.ts";

export default function Footer() {
  return (
    <>
      <FooterContainer>
        <FooterLeft>
          <LeftLogo>
            {"{"}Code_Coach{"}"}
          </LeftLogo>
        </FooterLeft>
        <FooterRight>
          <RightInfo>
            <Contact>contact: codecoach e-mail number: 010-xxxx-xxxx </Contact>
          </RightInfo>
        </FooterRight>
      </FooterContainer>
    </>
  );
}
