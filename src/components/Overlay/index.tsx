import styled from "@emotion/styled";
import { HTMLAttributes, ReactNode } from "react";

interface Props extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  alpha?: number;
  zIndex?: number;
}

const Overlay = ({ children, alpha = 0.5, zIndex, ...props }: Props) => {
  return (
    <Container alpha={alpha} zIndex={zIndex} {...props}>
      {children}
    </Container>
  );
};

const Container = styled.div<{ alpha: number; zIndex?: number }>`
  position: absolute;
  top: 0;
  left: 0;
  z-index: ${({ zIndex }) => zIndex};
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, ${({ alpha }) => alpha});
`;

export default Overlay;
