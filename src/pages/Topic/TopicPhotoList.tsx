import styled from "@emotion/styled";
import PhotoItem from "@/components/photos/PhotosItem.tsx";
import { IPhoto } from "@/models/photos.ts";

interface Props {
  data: IPhoto[];
}

const TopicPhotoList = ({ data = [] }: Props) => {
  return (
    <Container>
      {data.map((item) => {
        return (
          <Col key={item.id}>
            <PhotoItem item={item} />
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
export default TopicPhotoList;
