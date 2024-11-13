import styled from "@emotion/styled";
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";
import ScrollMenu from "@/components/Lnb/TopicsLnb/ScrollMenu.tsx";
import { useTopics } from "@/hooks/useTopic.ts";
import React from "react";

const STATIC_MENU = [
  { to: "/", title: "Photos" },
  { to: "/plus/new", title: "Unsplash+" },
];

const TopicsLnb = () => {
  const { pathname } = useLocation();
  const { data } = useTopics({ per_page: 30 });

  return (
    <Container className={"TopicsLnb"}>
      <StaticNav>
        {STATIC_MENU.map(({ to, title }) => (
          <StaticNavLink
            key={title}
            to={to}
            className={cn({ active: pathname === to })}
          >
            {title}
          </StaticNavLink>
        ))}
      </StaticNav>
      <Divider />
      <ScrollMenu
        data={data}
        render={({ title, slug }) => (
          <NavLink
            key={title}
            to={`/topics/${slug}`}
            className={cn({ active: `/topics/${slug}` === pathname })}
          >
            <div>{title}</div>
          </NavLink>
        )}
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  padding: 0 20px;
  color: #767676;
  box-sizing: border-box;
`;

const Divider = styled.div`
  width: 1px;
  height: 30px;
  background-color: #ddd;
  flex-shrink: 0;
  @media (max-width: 765px) {
    display: none;
  }
`;

const StaticNav = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const StaticNavLink = styled(Link)`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 56px;

  &.active {
    border-bottom: 2px solid black;
    color: black;
    margin-bottom: -2px;
  }
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

const NavLink = styled(Link)`
  overflow-x: auto;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  height: 56px;
  white-space: nowrap;

  &.active {
    border-bottom: 2px solid black;
    color: black;
    margin-bottom: -2px;
  }
  &:hover {
    color: black;
    cursor: pointer;
  }
`;

export default TopicsLnb;
