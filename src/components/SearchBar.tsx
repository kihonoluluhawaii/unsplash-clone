import styled from "@emotion/styled";
import cn from "classnames";
import { ChangeEvent, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { TbCapture } from "react-icons/tb";

interface Props {
  type: string;
}
const SearchBar = ({ type }: Props) => {
  const [search, setSearch] = useState("");
  const inputRef = useRef(null);

  const searchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Container className={cn("SearchBar", type)}>
      <div>
        <IoSearch />
      </div>
      <form>
        <input
          placeholder="Search photos and illustrations"
          onChange={searchInput}
          ref={inputRef}
          value={search}
        />
      </form>
      <div>
        <TbCapture />
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  max-width: 1280px;
  height: 100%;
  background: #eee;
  padding: 0 14px;

  &.round {
    border-radius: 24px;
  }

  &.square {
    height: 54px;
    border-radius: 8px;
  }

  &:hover {
    background: #ddd;
  }

  > div {
    width: 20px;
  }

  svg {
    width: 100%;
    height: 100%;
    margin-top: 4px;
    color: #767676;
    cursor: pointer;
  }

  form {
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    input {
      width: 100%;
      padding: 0 10px;
    }
  }
`;

export default SearchBar;
