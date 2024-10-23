import styled from "@emotion/styled";
import { GoBellFill } from "react-icons/go";

const MyActivity = () => {
  return (
    <Container>
      <GoBellFill />
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
    &:hover {
      color: black;
    }
  }
`;

export default MyActivity;
