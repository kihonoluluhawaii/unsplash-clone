import styled from "@emotion/styled";
import { useTopics } from "@/hooks/useTopic.ts";
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";

const STATIC_MENU = [
  { to: "/", title: "Photos" },
  { to: "/plus/new", title: "Unsplash+" },
];

const TopicsLnb = () => {
  const { pathname } = useLocation();
  const { data } = useTopics({ per_page: 30 });

  return (
    <Container>
      {STATIC_MENU.map(({ to, title }) => (
        <StaticNavLink
          key={title}
          to={to}
          className={cn({ active: pathname === to })}
        >
          {title}
        </StaticNavLink>
      ))}
      <Divider />
      <NavScroll>
        {data?.map(({ title, slug }) => (
          <NavLink
            key={title}
            to={`/topics/${slug}`}
            className={cn({ active: `/topics/${slug}` === pathname })}
          >
            <div>{title}</div>
          </NavLink>
        ))}
      </NavScroll>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
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

const NavScroll = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  color: #767676;
  box-sizing: border-box;
  overflow: hidden;
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
