import styled from "@emotion/styled";
import Layout from "@/layout/Layout.tsx";
import Home from "@/pages/Home";
import { Route, Routes } from "react-router-dom";

import { lazy, Suspense } from "react";
import NotFound from "@/pages/NotFound";
import ModalLayer from "@/components/ModalLayer";
import ToastProvider from "@/providers/ToastProvider";

const Search = lazy(() => import("@/pages/Search"));
const Topic = lazy(() => import("@/pages/Topic"));

function App() {
  return (
    <ToastProvider>
      <ModalLayer>
        <Container>
          <Suspense fallback={null}>
            <Layout>
              <Routes>
                <Route path={"/"} element={<Home />} />
                <Route path={"/topics/:slug"} element={<Topic />} />
                <Route path={"/search/:category/:query"} element={<Search />} />
                <Route path={"*"} element={<NotFound />} />
              </Routes>
            </Layout>
          </Suspense>
        </Container>
      </ModalLayer>
    </ToastProvider>
  );
}

const Container = styled.div``;
export default App;
