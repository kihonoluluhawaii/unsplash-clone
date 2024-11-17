import styled from "@emotion/styled";
import Tags from "@/components/Tags";
import { ICollection } from "@/models/collections.ts";

interface Props {
  item: ICollection;
}

const Description = ({ item }: Props) => {
  return (
    <Container>
      <h1>{item?.title}</h1>
      <span>
        {item?.total_photos} images · Curated by {item?.user?.name}
      </span>
      <Tags tags={item?.tags} />
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

export default Description;
