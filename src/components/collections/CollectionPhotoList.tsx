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
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
`;

const Col = styled.div``;
export default CollectionPhotoList;
