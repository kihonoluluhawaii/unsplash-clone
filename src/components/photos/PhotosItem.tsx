import styled from "@emotion/styled";
import { IPhoto } from "@/models/photos.ts";
import PhotoDetailModal from "@/components/Modal/PhotoDetailModal.tsx";
import { useModal } from "@/hooks/useModal.ts";

interface Props {
  item: IPhoto;
}
const PhotosItem = ({ item }: Props) => {
  const { openModal, closeModal } = useModal();

  const handlePhotoItemClick = () => {
    openModal(<PhotoDetailModal onClose={closeModal} item={item} />);
  };

  return (
    <>
      <Container onClick={handlePhotoItemClick}>
        <img src={item.urls.regular} alt={item.alt_description} />
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 100%;

  > img {
    width: 100%;
    object-fit: cover;
  }
`;

export default PhotosItem;
