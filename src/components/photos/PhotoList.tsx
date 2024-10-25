import styled from "@emotion/styled";
import { IPhoto } from "@/models/photos.ts";
import PhotoItem from "@/components/photos/PhotoItem.tsx";

interface Props {
  data?: IPhoto[];
}

const PhotoList = ({ data = [] }: Props) => {
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
export default PhotoList;
