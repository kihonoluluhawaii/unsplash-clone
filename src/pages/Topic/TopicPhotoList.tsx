import styled from "@emotion/styled";
import PhotosItem from "@/components/PhotosList/PhotosItem.tsx";
import { ITopicPhoto } from "@/models/topics.ts";

interface Props {
  data: ITopicPhoto[];
}

const TopicPhotoList = ({ data = [] }: Props) => {
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
  column-count: 3;
  column-gap: 24px;
`;

const Col = styled.div`
  margin-bottom: 24px;
`;
export default TopicPhotoList;
