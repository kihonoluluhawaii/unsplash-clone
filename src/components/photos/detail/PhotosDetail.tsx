import styled from "@emotion/styled";
import Header from "@/components/photos/detail/Header.tsx";
import ImageDetail from "@/components/photos/detail/ImageDetail.tsx";
import { IPhoto } from "@/models/photos.ts";

interface Props {
  item: IPhoto;
}

const PhotosDetail = ({ item }: Props) => {
  return (
    <Container>
      <Header item={item} />
      <ImageDetail viewUrl={item.urls.regular} originUrl={item.urls.full} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  padding: 20px;
  color: black;

  > img {
    max-height: 760px;
    cursor: zoom-in;
  }
`;

export default PhotosDetail;
