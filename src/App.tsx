import styled from "@emotion/styled";
import Layout from "@/layout/Layout.tsx";
import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";

const Search = lazy(() => import("@/pages/Search"));
const Illustrations = lazy(() => import("@/pages/Illustrations"));
const Topic = lazy(() => import("@/pages/Topic"));

function App() {
  return (
    <Suspense>
      <Container>
        <Layout>
          <Routes>
            <Route path={"/"} element={<Home />} />
            <Route path={"/illustrations"} element={<Illustrations />} />
            <Route path={"/topics/:slug"} element={<Topic />} />
            <Route path={"/search/:category/:query"} element={<Search />} />
          </Routes>
        </Layout>
      </Container>
    </Suspense>
  );
}

const Container = styled.div``;
export default App;
