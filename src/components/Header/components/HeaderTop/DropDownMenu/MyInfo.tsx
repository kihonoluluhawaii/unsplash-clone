import styled from "@emotion/styled";
import { BsPersonCircle } from "react-icons/bs";

const MyInfo = () => {
  return (
    <Container>
      <BsPersonCircle />
    </Container>
  );
};

const Container = styled.div`
  width: 32px;
  padding: 6px;
  cursor: pointer;
  svg {
    width: 100%;
    height: 100%;
  }
`;

export default MyInfo;
