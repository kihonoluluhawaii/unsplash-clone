import styled from "@emotion/styled";
import { IPhoto } from "@/models/photos.ts";
import PhotosItem from "@/components/photos/PhotosItem.tsx";
import { getPhotosGroup } from "@/utils/photos.ts";
import FadeInUp from "@/components/FadeInUp";

interface Props {
  data?: IPhoto[];
}

const PhotosList = ({ data = [] }: Props) => {
  const columnCount = 3;
  const photosGroup = getPhotosGroup({ data, columnCount });

  return (
    <Container>
      <Row>
        {photosGroup.map((group, index) => (
          <Col key={index} columnCount={columnCount}>
            {group.map((item, i) => (
              <ItemBox key={i}>
                <PhotosItem item={item} />
              </ItemBox>
            ))}
          </Col>
        ))}
      </Row>
    </Container>
  );
};
const Container = styled.div`
  margin-top: 56px;
`;

const Row = styled.div`
  display: flex;
`;

const Col = styled.div<{ columnCount: number }>`
  width: ${({ columnCount }) => 100 / columnCount}%;
  padding: 0 8px;
`;

const ItemBox = styled.div`
  margin-bottom: 16px;
`;

export default PhotosList;
