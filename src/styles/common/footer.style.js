import styled from "styled-components";

const maincolor = "#E9E9E9";

export const FooterContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 70px;
  background-color: ${maincolor};
  justify-content: space-between;
  bottom: 0;
`;

export const FooterLeft = styled.div`
  width: 200px;
  height: 70px;
  background-color: ${maincolor};
`;

export const LeftLogo = styled.p`
  display: inline-block;
  font-size: 25px;
  padding-left: 20px;
  margin-top: 20px;
`;

export const FooterRight = styled.div`
  width: 400px;
  height: 70px;
  background-color: ${maincolor};
`;

export const RightInfo = styled.div`
  width: 300px;
  height: 70px;
  background-color: ${maincolor};
  margin: 0 auto;
`;

export const Contact = styled.p`
  display: inline-block;
  font-size: 20px;
  margin-top: 10px;
  padding-left: 30px;
`;

export const HeaderLinks = styled(Link)`
  text-decoration: none;
`;
