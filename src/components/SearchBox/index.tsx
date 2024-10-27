import styled from "@emotion/styled";
import cn from "classnames";
import { IconSearch } from "@/components/Icons";
import { ChangeEvent, useState } from "react";
import { useNavigate } from "react-router-dom";

interface Props {
  type: "round" | "square";
}

const SearchBox = ({ type = "round" }: Props) => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const handleSubmit = (e: ChangeEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/search/photos/${value}`);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
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
          placeholder={"Search photos and illustrations"}
          onChange={handleInputChange}
        />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  flex: 1;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  background-color: #eee;
  .round & {
    border-radius: 100px;
  }
  .square & {
    width: 24px;
    height: 24px;
  }
  .btn-search {
    padding-left: 12px;
    margin-right: 8px;
    svg {
      .round & {
        width: 20px;
        height: 20px;
      }
      .square & {
        width: 24px;
        height: 24px;
      }
    }
  }
  input {
    flex: 1;
    height: 30px;
    padding: 8px;
    .round & {
      height: 40px;
    }
    .square & {
      height: 54px;
    }
  }
`;

export default SearchBox;
