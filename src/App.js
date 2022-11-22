import { BrowserRouter, Route, Routes } from "react-router-dom";
import styled from "styled-components";
import Footer from "./components/footer.js";
import Header from "./components/header.js";
import MainPage from "./components/main.js";
import MyPage from "./pages/my/MyPage";
import { Community } from "./pages/community.js";

function App() {
  return (
    <Layout>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/community" element={<Community />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Layout>
  );
}

const Layout = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default App;
