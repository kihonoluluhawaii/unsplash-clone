import styled from "@emotion/styled";
import { Result } from "@/models/search.ts";

interface Props {
  item: Result;
}

const CollectionDescription = ({ item }: Props) => {
  console.log("@@ item", item);
  return (
    <Container>
      <h1>{item?.title}</h1>
      <span>
        {item?.total_photos} images · Curated by {item?.user?.name}
      </span>
      <Tags>
        {item?.tags
          ?.slice(0, 3)
          .map((tag) => (
            <div key={tag.title}>
              {tag.title.charAt(0).toUpperCase() + tag.title.slice(1)}
            </div>
          ))}
      </Tags>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 20px 0;

  h1 {
    font-size: 18px;
    font-weight: 600;
  }

  span {
    font-size: 14px;
    color: #767676;
  }
`;

const Tags = styled.div`
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
export default CollectionDescription;
