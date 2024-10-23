import styled from "@emotion/styled";
import { ChangeEvent, useRef, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { TbCapture } from "react-icons/tb";

const SearchBar = () => {
  const [search, setSearch] = useState("");
  const [clicked, setClicked] = useState(false);
  const inputRef = useRef(null);

  const searchInput = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const onClickSearchBar = () => {
    if (inputRef.current) {
      setClicked(true);
    } else {
      setClicked(false);
    }
  };

  return (
    <Container
      onClick={() => onClickSearchBar()}
      className={clicked ? "clicked-search-bar" : ""}
    >
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
  border-radius: 24px;
  padding: 0 14px;
  box-sizing: border-box;
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
    width: 100%;
    input {
      width: 100%;
      padding: 0 10px;
    }
  }
`;

export default SearchBar;
