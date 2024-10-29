import { Link } from "react-router-dom";
import styled from "@emotion/styled";

const NotFound = () => {
  return (
    <Container>
      <h1>404 - 페이지를 찾을 수 없습니다</h1>
      <p>요청하신 페이지가 존재하지 않습니다.</p>
      <NavLink to="/">돌아가기</NavLink>
    </Container>
  );
};

const Container = styled.div``;

const NavLink = styled(Link)``;

export default NotFound;
