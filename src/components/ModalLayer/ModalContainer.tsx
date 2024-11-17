import styled from "@emotion/styled";
import { ReactNode } from "react";
import { IconX } from "@/components/Icons";
import cn from "classnames";
import Overlay from "@/components/Overlay";

interface Props {
  children: ReactNode;
  onClose: () => void;
}

const ModalContainer = ({ children, onClose }: Props) => {
  return (
    <Container className={cn("ModalContainer")}>
      <Track>
        <Content>{children}</Content>
        <CloseButton onClick={onClose}>
          <IconX />
        </CloseButton>
        <Overlay
          className={"hi"}
          style={{ cursor: "zoom-out" }}
          onClick={onClose}
        />
      </Track>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Track = styled.div`
  position: relative;
  z-index: 10;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100vh;
  padding: 50px 0 100px;
  overflow-y: auto;
`;

const Content = styled.div`
  position: relative;
  z-index: 100;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 90%;
  background-color: #fff;
  border-radius: 9px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  left: 0;
  width: 24px;
  height: 24px;
  margin: 10px;
  color: white;
  cursor: pointer;
  z-index: 1;
  &:hover {
    color: #ddd;
  }
`;

export default ModalContainer;
