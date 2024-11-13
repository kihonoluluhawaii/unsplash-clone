import styled from "@emotion/styled";
import { ReactNode } from "react";

interface Props {
  children?: ReactNode;
  width: number;
  height: number;
  color: string;
}
const RatioBox = ({ children, width, height, color }: Props) => {
  const percentage = (100 / width) * height;
  return (
    <Container percentage={percentage} color={color}>
      <Inner>{children}</Inner>
    </Container>
  );
};

const Container = styled.div<{ percentage: number; color: string }>`
  position: relative;
  padding-bottom: ${({ percentage }) => percentage}%;
  background-color: ${({ color }) => color};
`;

const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  > * {
    width: 100%;
    height: 100%;
  }
`;
export default RatioBox;
