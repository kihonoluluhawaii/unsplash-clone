import styled from "@emotion/styled";
import Layout from "@/layout/Layout.tsx";
import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";
import Topic from "src/pages/Topic";
import Illustrations from "@/pages/Illustrations";

function App() {
  return (
    <Container>
      <Layout>
        <Routes>
          <Route path={"/"} element={<Home />}></Route>
          <Route path={"/illustrations"} element={<Illustrations />}></Route>
          {/*<Route path={"/"} element={<Home />}></Route>*/}
          <Route path={"/topics/:slug"} element={<Topic />} />
        </Routes>
      </Layout>
    </Container>
  );
}

const Container = styled.div``;
export default App;
