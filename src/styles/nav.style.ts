import styled from "styled-components";

const maincolor = "#E9E9E9";

export const NavContainer = styled.div`
  //   border: 1px solid #555;
  width: 100%;
  height: 70px;
  background-color: ${maincolor};
  display: flex;
  justify-content: space-between;
`;

export const NavMenu = styled.div`
  width: 700px;
  height: 70px;
  background-color: ${maincolor};
  display: flex;
  justify-content: space-evenly;
`;

export const MenuList = styled.div`
  width: 90px;
  height: 40px;
  margin-top: 10px;
  padding-top: 14px;
  text-align: center;
  background-color: ${maincolor};
  font-size: 18px;
  font-weight: 700;
`;

export const NavInfoButton = styled.div`
  width: 250px;
  height: 50px;
  background-color: ${maincolor};
  display: flex;
  justify-content: space-between;
  padding-top: 15px;
`;

export const MyPageButton = styled.button`
  width: 110px;
  height: 40px;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;

export const LogOutButton = styled.button`
  width: 110px;
  height: 40px;
  border: none;
  font-size: 18px;
  cursor: pointer;
`;
