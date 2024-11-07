import styled from "@emotion/styled";
import cn from "classnames";

import { useTopics } from "@/hooks/useTopic.ts";
import { Link, useLocation } from "react-router-dom";

const TopicScrollMenu = () => {
  const { pathname } = useLocation();
  const { data } = useTopics({ per_page: 30 });
  return (
    <Container>
      {data?.map(({ title, slug }) => (
        <NavLink
          key={title}
          to={`/topics/${slug}`}
          className={cn({ active: `/topics/${slug}` === pathname })}
        >
          <div>{title}</div>
        </NavLink>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  padding: 0 20px;
  gap: 30px;
  color: #767676;
  box-sizing: border-box;
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

export default TopicScrollMenu;
