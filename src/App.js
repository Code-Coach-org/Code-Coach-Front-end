import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
import MainPage from "./components/main.js";
import MyPage from "./pages/my/MyPage";
import Community from "./pages/community.js";
import * as P from "./pages"

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/community" element={<Community />} />
          <Route path="/class" element={<P.ClassListPage />} />
          <Route path="/class/:classId/curriculum" element={<P.ClassCurriculumPage /> } />
          <Route path="/class/:classId/report" element={<P.ClassReportPage /> } />
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
