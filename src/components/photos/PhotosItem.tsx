import styled from "@emotion/styled";
import { IPhoto } from "@/models/photos.ts";
import PhotoDetailModal from "@/components/Modal/PhotoDetailModal.tsx";
import { useModal } from "@/hooks/useModal.ts";
import LazyImage from "@/components/LazyImage";
import RatioBox from "@/components/RatioBox";

interface Props {
  item: IPhoto;
}
const PhotosItem = ({ item }: Props) => {
  const { openModal, closeModal } = useModal();

  const handlePhotoItemClick = async () => {
    const result = await openModal((resolve) => (
      <PhotoDetailModal onClose={() => closeModal(true)} item={item} />
    ));
    if (result) {
      console.log("@@ result", result);
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
    height: 100%;
    object-fit: cover;
  }
`;

export default PhotosItem;
