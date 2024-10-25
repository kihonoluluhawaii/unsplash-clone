import styled from "@emotion/styled";
import { NavLink } from "react-router-dom";
import { useTopics } from "@/hooks/useTopic.ts";
import cn from "classnames";

interface Props {
  selected: string;
  onClick: (label: string) => void;
}

const STATIC_MENU = [
  { slug: "/", title: "Photos" },
  { slug: "/illustrations", title: "Illustrations" },
  { slug: "/plus/new", title: "Unsplash+" },
];

const Category = ({ selected }: Props) => {
  const { data = [] } = useTopics();

  return (
    <Container>
      {STATIC_MENU.map(({ slug, title }) => (
        <StyledNavLink
          key={title}
          to={slug}
          className={cn({ active: selected === slug })}
        >
          {title}
        </StyledNavLink>
      ))}

      <div className="divider" />

      {data?.map(({ slug, title }) => (
        <StyledNavLink
          key={title}
          to={`/topics/${slug}`}
          className={cn({ active: selected === slug })}
        >
          {title}
        </StyledNavLink>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 100%;
  box-sizing: border-box;
  padding-right: 20px;
  font-size: 14px;
  transition: color 0.4s ease-in-out;

  .divider {
    width: 1px;
    height: 28px;
    background: #eee;
  }
`;

const StyledNavLink = styled(NavLink)`
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

export default Category;
