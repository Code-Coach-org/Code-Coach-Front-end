import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/footer";
import Header from "./components/header";
import MainPage from "./components/main";
import MyPage from "./pages/my/MyPage";
import Community from "./pages/community";
import * as P from "./pages";
import TopHeader from "./components/topHeader";
import { LoginModal } from "./components/login/Login";
import { Signup } from "./components/signup/Signup";



function App() {
  return (
    <Layout>
      <BrowserRouter>
        <TopHeader />
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          {/* 임시로 설정해 둔 로그인 링크 */}
          <Route path="/login" element={<LoginModal />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/community/:co_id" element={<Community />} />
          <Route path="/class" element={<P.ClassListPage />} />
          <Route
            path="/class/:classId/curriculum"
            element={<P.ClassCurriculumPage />}
          />
          <Route
            path="/class/:classId/report"
            element={<P.ClassReportPage />}
          />
          <Route
            path="/class/:classId/notice"
            element={<P.ClassNoticePage />}
          />
          <Route
            path="/class/:classId/attendance"
            element={<P.ClassAttendancePage />}
          />
          {/* <Route path="/class/:classId/attendance" element={<P.ClassAttendanceCompletedPage title="지금은 출석 체크 중이 아닙니다." /> } /> */}
          {/* <Route path="/class/:classId/attendance" element={<P.InAttendancePage /> } /> */}
          {/* <Route path="/class/:classId/attendance" element={<P.BeforeAttendancePage /> } /> */}
          <Route path="/admin" element={<P.AdminMainPage />} />
          <Route path="/admin/member" element={<P.AdminMemberPage />} />
          <Route path="/admin/community" element={<P.AdminCommunityPage />} />
          <Route path="/admin/class" element={<P.AdminMainPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 100%;
`;

export default App;
