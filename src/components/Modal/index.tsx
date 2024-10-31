import styled from "@emotion/styled";
import { ReactNode } from "react";
import Portal from "@/components/Portal.tsx";
import { IconLeft, IconX } from "@/components/Icons";
import cn from "classnames";

type Props = {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
};
const Modal = ({ isOpen, onClose, children }: Props) => {
  if (!isOpen) return null;
  return (
    <Portal>
      <Container className={cn("ModalContainer")} onClick={onClose}>
        <Box>
          <IconX />
          <Overlay />
          <ControlBox>
            <PrevButton>
              <IconLeft />
            </PrevButton>
            <Content>{children}</Content>
            <NextButton>
              <IconLeft />
            </NextButton>
          </ControlBox>
        </Box>
      </Container>
    </Portal>
  );
};

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  overflow-y: auto;
`;

const Box = styled.div`
  margin: 40px;
  > svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    color: white;
    margin: 10px;
    cursor: pointer;
    z-index: 1;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
`;

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

const Content = styled.div`
  position: relative;
  background: white;
  border-radius: 8px;
  overflow: hidden;
`;
export default Modal;
