import styled from "@emotion/styled";
import cn from "classnames";

interface Props {
  totalPage: number;
  page?: number;
  onChange: (page: number) => void;
}

const Pagination = ({ totalPage = 10, page = 1, onChange }: Props) => {
  const arr = new Array(totalPage).fill(1).map((_, index) => index + 1);
  return (
    <Container>
      <PageItem
        onClick={() => {
          if (page < 1) return;
          onChange(page - 1);
          // onChange(Math.max(page - 1, 1))
        }}
      >
        prev
      </PageItem>
      {arr.map((pageNo) => (
        <PageItem
          className={cn({ isActive: page === pageNo })}
          onClick={() => onChange(pageNo)}
        >
          {pageNo}
        </PageItem>
      ))}
      <PageItem onClick={() => onChange(Math.min(page + 1, totalPage))}>
        next
      </PageItem>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  padding: 30px 0 50px;
`;

const PageItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 42px;
  height: 42px;
  border: 1px solid #ddd;
  cursor: pointer;
  &.isActive {
    border: 1px solid #18f;
    color: #18f;
    font-weight: bold;
  }
`;

export default Pagination;
