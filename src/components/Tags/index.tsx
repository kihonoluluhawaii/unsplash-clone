import styled from "@emotion/styled";

interface Props {
  tags: { title: string }[];
}

const Tags = ({ tags }: Props) => {
  return (
    <Container>
      {tags
        ?.slice(0, 3)
        .map((tag) => (
          <div key={tag.title}>
            {tag.title.charAt(0).toUpperCase() + tag.title.slice(1)}
          </div>
        ))}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  gap: 10px;
  font-size: 14px;
  font-weight: 500;
  > div {
    padding: 10px;
    border-radius: 4px;
    background-color: #eee;
    color: #555555;

    cursor: pointer;
    transition: background-color 0.4s;
    &:hover {
      background-color: #e1e1e1;
      color: #111111;
    }
  }
`;

export default Tags;
