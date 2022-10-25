import {
  NavContainer,
  NavMenu,
  NavInfoButton,
  MyPageButton,
  LogOutButton,
  MenuList,
} from "../styles/nav.style.ts";

export default function Nav() {
  return (
    <NavContainer>
      <NavMenu>
        <MenuList>메인</MenuList>
        <MenuList>모집</MenuList>
        <MenuList>커뮤니티</MenuList>
        <MenuList>수업</MenuList>
        <MenuList>관리</MenuList>
      </NavMenu>
      <NavInfoButton>
        <MyPageButton>마이페이지</MyPageButton>
        <LogOutButton>로그아웃</LogOutButton>
      </NavInfoButton>
    </NavContainer>
  );
}
