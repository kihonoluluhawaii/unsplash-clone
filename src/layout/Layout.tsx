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
      {children}
    </Container>
  );
};

const Container = styled.div`
  padding: 0 20px;
`;

export default Layout;
