import styled from "@emotion/styled";
import { Link, useParams } from "react-router-dom";

const SEARCH_RELATED = [
  { title: "blue" },
  { title: "red" },
  { title: "yellow" },
  { title: "sand" },
  { title: "water" },
  { title: "moon" },
  { title: "space" },
  { title: "country" },
  { title: "sports" },
];

const SearchRelated = () => {
  const { category } = useParams();

  return (
    <Container>
      {SEARCH_RELATED.map(({ title }) => (
        <NavLink key={title} to={`/search/${category}/${title}`}>
          {title.charAt(0).toUpperCase() + title.slice(1)}
        </NavLink>
      ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  max-width: 1300px;
  overflow: hidden;
  color: #767676;
  box-sizing: border-box;
`;

const NavLink = styled(Link)`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #d9d9d9;
  border-radius: 8px;
  width: 144px;
  height: 40px;
  padding: 10px;
  font-size: 14px;
  font-weight: bold;
  &.active {
    border-bottom: 2px solid black;
    color: black;
    margin-bottom: -2px;
  }
  &:hover {
    color: black;
    cursor: pointer;
    border-color: black;
  }
`;

export default SearchRelated;
