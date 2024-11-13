import styled from "@emotion/styled";
import { ReactNode, useEffect } from "react";
import { useInView } from "@/hooks/useInView.ts";

interface Props {
  children: ReactNode;
  onNext: () => void;
}
const InfiniteScroll = ({ children, onNext }: Props) => {
  const [ref, inView] = useInView({
    rootMargin: "0px 0px 50px",
  });

  useEffect(() => {
    if (!inView) return;
    onNext();
  }, [inView, onNext]);

  return (
    <>
      {children}
      <Sentinel ref={ref}>loading...</Sentinel>
    </>
  );
};

const Sentinel = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100px;
`;
export default InfiniteScroll;
