import styled from "@emotion/styled";
import Nav from "@/components/Header/Nav.tsx";
import { Link } from "react-router-dom";
import { IconLogo } from "@/components/Icons";
import SearchBox from "@/components/SearchBox";

const Header = () => {
  return (
    <Container>
      <Logo
        to={"/"}
        aria-label={"브랜드 홈 링크"}
        aria-describedby={"브랜드 홈 링크"}
      >
        <IconLogo />
      </Logo>
      <SearchBox type={"round"} />
      <Nav />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 11px 20px;
  gap: 16px;
  background-color: #fff;
`;

const Logo = styled(Link)`
  display: flex;
  width: 28px;
  height: 28px;
  svg {
    flex-shrink: 0;
  }
`;

export default Header;
