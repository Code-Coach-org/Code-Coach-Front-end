import * as S from "../styles/common/footer.style";

export default function Footer() {
  return (
    <>
      <S.FooterContainer>
        <S.FooterLeft>
          <S.LeftLogo>
            {"{"}Code_Coach{"}"}
          </S.LeftLogo>
        </S.FooterLeft>
        <S.FooterRight>
          <S.RightInfo>
            <S.Contact>contact: codecoach e-mail number: 010-xxxx-xxxx </S.Contact>
          </S.RightInfo>
        </S.FooterRight>
      </S.FooterContainer>
    </>
  );
}
