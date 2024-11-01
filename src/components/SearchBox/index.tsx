import styled from "@emotion/styled";
import cn from "classnames";
import { IconClose, IconSearch, IconVisual } from "@/components/Icons";
import { ChangeEvent, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  type: "round" | "square";
}
const SearchBox = ({ type = "round" }: Props) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/photos/${value}`);
  };

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const handleReset = () => {
    setValue("");
    inputRef.current?.focus();
  };

  return (
    <Container className={cn("SearchBox", type)}>
      <Form onSubmit={handleSubmit}>
        <button className={"btn-search"} type={"submit"}>
          <IconSearch />
        </button>
        <input
          type="text"
          value={value}
          placeholder="Search photos and illustrations"
          onChange={handleSearch}
          ref={inputRef}
        />
        {value && (
          <button className={"btn-close"} type={"submit"} onClick={handleReset}>
            <IconClose />
          </button>
        )}
        <button className="btn-visual" type="submit">
          <IconVisual />
        </button>
      </Form>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
`;

const Form = styled.form`
  display: flex;
  flex: 1;
  align-items: center;
  background-color: #eee;

  &:hover {
    background: #ddd;
  }

  &.active {
    background-color: #f0f0f0;
  }

  :focus {
    box-shadow: inset 0 0 20px red;
  }

  .round & {
    border-radius: 100px;
  }

  .square & {
    border-radius: 8px;
  }

  button {
    cursor: pointer;
    color: #767676;
  }

  .btn-search {
    padding-left: 12px;
    margin-right: 8px;

    svg {
      .round & {
        width: 20px;
      }

      .square & {
        width: 24px;
      }
    }
  }

  .btn-visual {
    padding-left: 10px;
    margin-right: 10px;

    svg {
      .round & {
        width: 20px;
      }

      .square & {
        width: 24px;
      }
    }
  }

  .btn-close {
    padding-right: 10px;
    border-right: 1px solid #ccc8c8;

    svg {
      .round & {
        width: 20px;
        height: 16px;
      }
    }
  }

  input {
    width: 100%;
    height: 40px;

    .round & {
      height: 40px;
    }

    .square & {
      height: 54px;
    }
  }
`;

export default SearchBox;
