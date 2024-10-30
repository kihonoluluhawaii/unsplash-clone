import styled from "@emotion/styled";
import Header from "@/components/Header";
import { ReactNode } from "react";
import Lnb from "@/components/Lnb";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      <Lnb />
      <Divider />
      {children}
    </Container>
  );
};

const Container = styled.div``;

const Divider = styled.hr`
  width: 100%;
  margin: 0;
  border-top: 1px solid #ddd;
`;
export default Layout;
