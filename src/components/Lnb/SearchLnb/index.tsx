import styled from "@emotion/styled";
import { IconCollection, IconImage, IconUser } from "@/components/Icons";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

const SEARCH_MENUS = [
  { name: "photos", icon: <IconImage />, count: 10 },
  { name: "collections", icon: <IconCollection />, count: 10 },
  { name: "users", icon: <IconUser />, count: 10 },
];

const SearchLnb = () => {
  const { pathname } = useLocation();
  const query = pathname.split("/").pop();
  const currentName = pathname.split("/search").pop()?.split("/")[1];
  if (!query) return null;

  return (
    <Container>
      {SEARCH_MENUS.map(({ name, icon }) => (
        <MenuItem
          key={name}
          className={cn("SearchLnb", { active: currentName === name })}
        >
          <Link to={`/search/${name}/${query}`}>
            <div className="search-icon">{icon}</div>
            <span>{name}</span>
          </Link>
        </MenuItem>
      ))}
    </Container>
  );
};

const Container = styled.div`
  padding: 0 20px;
  display: flex;
  gap: 20px;
`;

const MenuItem = styled.div`
  display: flex;
  color: #767676;

  &:hover {
    color: black;
  }

  .search-icon {
    width: 20px;
    margin-right: 10px;
  }

  &.active {
    border-bottom: 2px solid black;
    color: black;
  }

  a {
    display: flex;
    align-items: center;
    height: 55px;
  }
`;

export default SearchLnb;
