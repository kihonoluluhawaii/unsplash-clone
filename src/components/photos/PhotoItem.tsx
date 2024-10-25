import styled from "@emotion/styled";
import { IPhoto } from "@/models/photos.ts";
import { ITopicPhoto } from "@/models/topics.ts";

interface Props {
  item: IPhoto | ITopicPhoto;
}
const PhotoItem = ({ item }: Props) => {
  return (
    <Container>
      <img src={item.urls.regular} alt={item.alt_description} />
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

export default PhotoItem;
