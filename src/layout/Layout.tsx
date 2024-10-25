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

const Container = styled.div`
  padding: 0 20px;
`;

const Divider = styled.hr`
  margin: 0 0 0 -20px;
  width: calc(100% + 40px);
  padding: 0;
  border-top: 1px solid #ddd;
`;
export default Layout;
