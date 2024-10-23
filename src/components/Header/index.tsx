import styled from "@emotion/styled";
import Nav from "@/components/Header/Nav.tsx";
import { RxGithubLogo } from "react-icons/rx";
import SearchBar from "@/components/Header/components/HeaderTop/SearchBar.tsx";
import HeaderBottom from "@/components/Header/components/HeaderBottom";

const Header = () => {
  return (
    <Container>
      <HeaderTop>
        <Logo>
          <RxGithubLogo />
        </Logo>
        <SearchBar borderRadius="24px" />
        <Gnb>
          <Nav />
        </Gnb>
      </HeaderTop>
      <HeaderBottom />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
`;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  padding-block: 11px;
  gap: 14px;
  color: #767676;
`;

const Logo = styled.div`
  min-width: 40px;
  cursor: pointer;
  color: black;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const Gnb = styled.div`
  display: flex;
  align-items: center;
`;

export default Header;
