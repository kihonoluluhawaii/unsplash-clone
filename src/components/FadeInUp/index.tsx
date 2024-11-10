import styled from "@emotion/styled";
import { ReactNode, useEffect, useState } from "react";
import { useInView } from "@/hooks/useInView.ts";
import cn from "classnames";

interface Props {
  children: ReactNode;
  delay?: number;
}

const FadeInUp = ({ children, delay = 0 }: Props) => {
  const [active, setActive] = useState(false);
  const [ref, inView] = useInView({ rootMargin: "0px 0px 100px" });
  useEffect(() => {
    if (!inView) return;
    setActive(true);
  }, [inView]);
  return (
    <Container className={cn({ isActive: active })} delay={delay} ref={ref}>
      {children}
    </Container>
  );
};

const Container = styled.div<{ delay: number }>`
  opacity: 0;
  transform: translateY(100px);
  transition: 0.4s ${({ delay }) => delay}s;
  &.isActive {
    opacity: 1;
    transform: none;
  }
`;

export default FadeInUp;
