import styled from "@emotion/styled";
import Category from "@/components/Header/components/HeaderBottom/Category.tsx";
import { useState } from "react";

const HeaderBottom = () => {
  const [selected, setSelected] = useState<string>("");

  const onClick = (label: string) => {
    setSelected(label);
  };
  return (
    <Container>
      <Category selected={selected} onClick={onClick} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  height: 56px;
  color: #767676;
  box-sizing: border-box;
`;

export default HeaderBottom;
