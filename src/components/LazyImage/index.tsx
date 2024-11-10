import styled from "@emotion/styled";
import { useInView } from "@/hooks/useInView.ts";
import { useEffect, useState } from "react";

interface Props {
  src?: string;
}

const LazyImage = ({ src }: Props) => {
  const [active, setActive] = useState(false);
  const [ref, inView] = useInView();

  useEffect(() => {
    if (!inView) return;
    setActive(true);
  }, [inView]);

  return (
    <Container ref={ref}>
      {active || inView ? <img src={src} alt="" /> : <PlaceholderCard />}
    </Container>
  );
};

const Container = styled.div`
  img {
    width: 100%;
    height: 100%;
  }
`;

const PlaceholderCard = styled.div`
  width: 100%;
  border-radius: 24px;
`;

export default LazyImage;
