import styled from "@emotion/styled";
import { ReactNode, useEffect } from "react";
import { useInView } from "@/hooks/useInView.ts";

interface Props {
  children: ReactNode;
  onImpress: () => void;
}
const Impression = ({ children, onImpress }: Props) => {
  const [ref, inView] = useInView({ threshold: 0.7 });

  useEffect(() => {
    if (!inView) return;
    onImpress();
  }, [inView]);
  return <Container ref={ref}>{children}</Container>;
};

const Container = styled.div``;

export default Impression;
