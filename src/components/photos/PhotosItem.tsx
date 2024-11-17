import styled from "@emotion/styled";
import { IPhoto } from "@/models/photos.ts";
import PhotoDetailModal from "@/components/PhotosModal/PhotoDetailModal.tsx";
import { useModal } from "@/hooks/useModal.ts";
import LazyImage from "@/components/LazyImage";
import RatioBox from "@/components/RatioBox";
import { useLocation } from "react-router-dom";

interface Props {
  item: IPhoto;
}
const PhotosItem = ({ item }: Props) => {
  const location = useLocation();
  const { openModal } = useModal();

  const handlePhotoItemClick = async () => {
    window.history.pushState(null, "", `/photos/${item.slug}`);
    const isClosed = await openModal(<PhotoDetailModal item={item} />);

    if (isClosed) {
      window.history.pushState(null, "", location.pathname);
    }
  };

  return (
    <RatioBox width={item.width} height={item.height} color={item.color}>
      <Container onClick={handlePhotoItemClick}>
        <LazyImage src={item.urls.regular} />
      </Container>
    </RatioBox>
  );
};

const Container = styled.div`
  width: 100%;

  img {
    width: 100%;
    object-fit: cover;
  }
`;

export default PhotosItem;
