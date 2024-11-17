import styled from "@emotion/styled";
import Item from "@/components/collections/Item.tsx";
import Description from "@/components/collections/Description.tsx";
import { ICollection } from "@/models/collections.ts";

interface Props {
  data?: ICollection[];
}
const CollectionPhotoList = ({ data = [] }: Props) => {
  return (
    <Container>
      {data.map((item) => {
        return (
          <Col key={item.id}>
            <Item item={item} />
            <Description item={item} />
          </Col>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
`;

const Col = styled.div``;

export default CollectionPhotoList;
