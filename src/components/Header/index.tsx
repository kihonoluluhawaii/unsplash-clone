import styled from "@emotion/styled";
import Nav from "@/components/Header/Nav.tsx";
import { RxGithubLogo } from "react-icons/rx";

import HeaderBottom from "@/components/Header/components/HeaderBottom";
import { useNavigate } from "react-router-dom";
import SearchBar from "@/components/SearchBar.tsx";

const Header = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <HeaderTop>
        <Logo onClick={() => navigate("/")}>
          <RxGithubLogo />
        </Logo>
        <SearchBar type={"round"} />
        <Gnb>
          <Nav />
        </Gnb>
      </HeaderTop>
      <HeaderBottom />
    </Container>
  );
};

const Container = styled.div``;

const HeaderTop = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 62px;
  padding: 11px 20px;
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
