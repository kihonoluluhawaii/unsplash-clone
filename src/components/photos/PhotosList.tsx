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
            {group?.map((item, i) => (
              <ItemBox key={i}>
                <FadeInUp delay={0.1 * i}>
                  <PhotosItem item={item} />
                </FadeInUp>
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
  padding: 0 8px;
  width: ${({ columnCount }) => 100 / columnCount}%;
`;
const ItemBox = styled.div`
  margin-bottom: 16px;
`;
export default PhotosList;
