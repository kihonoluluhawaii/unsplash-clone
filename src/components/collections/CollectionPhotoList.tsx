import styled from "@emotion/styled";
import CollectionPhotoItem from "@/components/collections/CollectionPhotoItem.tsx";
import CollectionDescription from "@/components/collections/CollectionDescription.tsx";
import { Result } from "@/models/search.ts";

interface Props {
  data?: Result[];
}
const CollectionPhotoList = ({ data = [] }: Props) => {
  return (
    <Container>
      {data.map((item) => {
        return (
          <Col key={item.id}>
            <CollectionPhotoItem item={item} />
            <CollectionDescription item={item} />
          </Col>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Col = styled.div``;
export default CollectionPhotoList;
