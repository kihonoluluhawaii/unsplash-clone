import styled from "@emotion/styled";
import { IPhoto } from "@/models/photos.ts";
import { PreviewPhoto } from "@/models/topics.ts";

interface Props {
  item: PreviewPhoto;
}
const CollectionPhotoItem = ({ item }: Props) => {
  const photos = item?.preview_photos?.slice(0, 3);

  return (
    <Container>
      <CardList>
        <Card>
          <BigImage>
            <img
              src={photos[0]?.urls.regular}
              alt={photos[0]?.alt_description}
            />
          </BigImage>
          <SmallImage>
            <img
              src={photos[1]?.urls.regular}
              alt={photos[1]?.alt_description}
            />
            <img
              src={photos[2]?.urls.regular}
              alt={photos[2]?.alt_description}
            />
          </SmallImage>
        </Card>
      </CardList>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
`;

const CardList = styled.div`
  width: 400px; 
  height: 290px; 
  overflow: hidden;
`;

const Card = styled.div`
  display: grid;
  grid-template-columns: 3fr 2fr;
  width: 100%;
  height: 100%;
  gap: 4px;
`;

const BigImage = styled.div`
  grid-column: 1 / 2;
  width: 100%;
  height: 100%;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const SmallImage = styled.div`
  display: grid;
  grid-template-rows: 1fr 1fr;
  gap: 2px;
  height: 100%;

  img {
    width: 144px;
    height: 144px;
    object-fit: cover;
  }
`;
export default CollectionPhotoItem;
