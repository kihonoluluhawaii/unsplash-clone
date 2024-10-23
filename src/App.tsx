import styled from "@emotion/styled";
import Layout from "@/layout/Layout.tsx";
import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Container>
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
        </Routes>
      </Layout>
    </Container>
  );
}

const Container = styled.div``;
export default App;
