import styled from "@emotion/styled";
import Nav from "@/components/Header/Nav.tsx";

const Header = () => {
  return (
    <Container>
      <Logo>로고</Logo>
      <Gnb>
        <Nav />
      </Gnb>
    </Container>
  );
};

const Container = styled.div``;

const Logo = styled.div``;

const Gnb = styled.div``;
export default Header;
