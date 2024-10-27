import styled from "@emotion/styled";
import { useTopics } from "@/hooks/useTopic.ts";
import cn from "classnames";
import { Link, useLocation } from "react-router-dom";

const STATIC_MENU = [
  { to: "/", title: "Photos" },
  { to: "/illustrations", title: "Illustrations" },
  { to: "/plus/new", title: "Unsplash+" },
];

const TopicsLnb = () => {
  const { pathname } = useLocation();
  const { data } = useTopics({ per_page: 30 });
  return (
    <Container>
      {STATIC_MENU.map(({ to, title }) => (
        <NavLink
          key={title}
          to={to}
          className={cn({ active: pathname === to })}
        >
          {title}
        </NavLink>
      ))}

      {data?.map(({ title, slug }) => {
        return (
          <NavLink
            key={title}
            to={`/topics/${slug}`}
            className={cn({ active: `/topics/${slug}` === pathname })}
          >
            {title}
          </NavLink>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 56px;
  padding: 0 20px;
  color: #767676;
  box-sizing: border-box;
`;

const NavLink = styled(Link)`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  height: 100%;

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
