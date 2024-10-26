import styled from "@emotion/styled";
import CollectionPhotoItem from "@/components/collections/CollectionPhotoItem.tsx";
import { IPhoto } from "@/models/photos.ts";

interface Props {
  data?: IPhoto[];
}
const CollectionPhotoList = ({ data = [] }: Props) => {
  return (
    <Container>
      {data.map((item) => {
        return (
          <Col key={item.id}>
            <CollectionPhotoItem item={item} />
          </Col>
        );
      })}
    </Container>
  );
};

const Container = styled.div`
  column-count: 3;
  column-gap: 24px;
`;

const Col = styled.div`
  margin-bottom: 24px;
`;
export default CollectionPhotoList;
