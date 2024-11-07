import styled from "@emotion/styled";
import { IconChevronLeft, IconChevronRight } from "@/components/Icons";
import React, { ReactNode, useEffect, useRef, useState } from "react";

interface Props {
  data: any[];
  children: (item: any) => ReactNode;
}

const ScrollMenu = ({ data, children }: Props) => {
  const trackRef = useRef<HTMLDivElement | null>(null);
  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  const setScrollInfo = (el: HTMLDivElement) => {
    setScrollLeft(el.scrollLeft);
    setMaxScroll(el.scrollWidth - el.clientWidth);
  };
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollInfo(e.target as HTMLDivElement);
  };

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    setScrollInfo(el);
  }, [data]);

  const start = scrollLeft === 0;
  const end = scrollLeft >= maxScroll;

  const handleLeftClick = () => {
    if (!trackRef.current) return;
    trackRef.current.scroll({
      left: trackRef.current.scrollLeft - 300,
      top: 0,
      behavior: "smooth",
    });
  };

  const handleRightClick = () => {
    if (!trackRef.current) return;
    trackRef.current.scroll({
      left: trackRef.current.scrollLeft + 300,
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Container className={"ScrollMenu"}>
      <Track onScroll={handleScroll} ref={trackRef}>
        {data?.map((item) => children(item))}
      </Track>
      {!start && (
        <>
          <ArrowButton className={"btn-left"} onClick={handleLeftClick}>
            <IconChevronLeft />
          </ArrowButton>
          <Fog className={"left"} />
        </>
      )}

      {!end && (
        <>
          <ArrowButton className={"btn-right"} onClick={handleRightClick}>
            <IconChevronRight />
          </ArrowButton>
          <Fog className={"right"} />
        </>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  overflow: hidden;
`;

const Track = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  overflow: auto;
  -ms-overflow-style: none;
  scrollbar-width: none;
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  padding: 0 8px;
  z-index: 10;
  cursor: pointer;
  &.btn-left {
    left: 0;
  }
  &.btn-right {
    right: 0;
  }
`;

const Fog = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 200px;
  &.left {
    left: 0;
    background: linear-gradient(270deg, hsla(0, 0%, 100%, 0) 0, #fff 90%, #fff);
  }
  &.right {
    right: 0;
    background: linear-gradient(90deg, hsla(0, 0%, 100%, 0) 0, #fff 90%, #fff);
  }
`;
export default ScrollMenu;
