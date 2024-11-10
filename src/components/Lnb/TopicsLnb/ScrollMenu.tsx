import React, { ReactNode, useEffect, useRef, useState } from "react";
import styled from "@emotion/styled";
import { IconChevronLeft, IconChevronRight } from "@/components/Icons";

interface Props {
  children: (item: any) => ReactNode;
  data: any[];
  render: (item: any) => ReactNode;
}

const ScrollMenu = ({ children, data, render }: Props) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const [scrollLeft, setScrollLeft] = useState(0);
  const [maxScroll, setMaxScroll] = useState(0);

  // 스크롤 상태 정보를 세팅.
  const setScrollInfo = (el: HTMLDivElement) => {
    setScrollLeft(el.scrollLeft);
    setMaxScroll(el.scrollWidth - el.clientWidth);
  };

  // 스크롤 할 때 마다 스크롤 상태 정보를 세팅.
  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    setScrollInfo(e.target as HTMLDivElement);
  };

  // 비동기 통신이 끝난 후 데이터가 반영된 스크롤 상태 정보를 세팅.
  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    setScrollInfo(el);
  }, [children]);

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
        {data?.map((item) => render(item))}
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
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
`;

const ArrowButton = styled.button`
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 10;
  padding: 0 8px;
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
