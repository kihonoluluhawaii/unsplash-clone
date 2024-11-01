import styled from "@emotion/styled";
import { Result } from "@/models/search.ts";

interface Props {
  item: Result;
}
const CollectionPhotoItem = ({ item }: Props) => {
  const photos = item?.preview_photos?.slice(0, 3);

  return (
    <Container>
      <Card>
        <BigImage>
          <img src={photos[0]?.urls.regular} alt={photos[0]?.id} />
        </BigImage>
        <SmallImage>
          <img src={photos[1]?.urls.regular} alt={photos[1]?.id} />
          <img src={photos[2]?.urls.regular} alt={photos[2]?.id} />
        </SmallImage>
      </Card>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 400px;
  height: 290px;
  overflow: hidden;
  border-radius: 8px;
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
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  img {
    width: 100%;
    height: 144px;
    object-fit: cover;
  }
`;
export default CollectionPhotoItem;
