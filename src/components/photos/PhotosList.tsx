import styled from "@emotion/styled";
import { IPhoto } from "@/models/photos.ts";
import PhotosItem from "@/components/photos/PhotosItem.tsx";

interface Props {
  data?: IPhoto[];
}

const PhotosList = ({ data = [] }: Props) => {
  return (
    <Container>
      {data.map((item) => {
        return (
          <Col key={item.id}>
            <PhotosItem item={item} />
          </Col>
        );
      })}
    </Container>
  );
};
const Container = styled.div`
  margin-top: 56px;
  column-count: 3;
  column-gap: 24px;
`;

const Col = styled.div`
  margin-bottom: 24px;
`;
export default PhotosList;
