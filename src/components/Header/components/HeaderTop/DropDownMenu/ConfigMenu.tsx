import styled from "@emotion/styled";
import { IoMdMenu } from "react-icons/io";

const ConfigMenu = () => {
  return (
    <Container>
      <IoMdMenu />
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

export default ConfigMenu;
