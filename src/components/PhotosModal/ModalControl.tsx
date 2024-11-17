import styled from "@emotion/styled";
import { IconLeft } from "@/components/Icons";

const ModalControl = () => {
  return (
    <Container>
      <ControlBox onClick={() => {}}>
        <PrevButton>
          <IconLeft />
        </PrevButton>
        <NextButton>
          <IconLeft />
        </NextButton>
      </ControlBox>
    </Container>
  );
};

const Container = styled.div``;

const ControlBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1;
`;

const PrevButton = styled.button`
  width: 32px;
  height: 32px;
  margin: 10px;
  cursor: pointer;
  color: gray;
`;

const NextButton = styled.button`
  width: 32px;
  height: 32px;
  margin: 10px;
  cursor: pointer;
  color: gray;
  transform: rotate(180deg);
`;

export default ModalControl;
