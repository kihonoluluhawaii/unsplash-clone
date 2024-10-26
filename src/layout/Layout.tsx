import styled from "@emotion/styled";
import Header from "@/components/Header";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
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
