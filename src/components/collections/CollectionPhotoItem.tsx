import styled from "@emotion/styled";
import { IPhoto } from "@/models/photos.ts";

interface Props {
  item: IPhoto;
}
const CollectionPhotoItem = ({ item }: Props) => {
  return (
    <Container>
      <img src={item?.cover_photo?.urls.regular} alt={item.alt_description} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  img {
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`;

export default CollectionPhotoItem;
