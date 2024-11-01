import styled from "@emotion/styled";
import { IPhoto } from "@/models/photos.ts";
import useModal from "@/hooks/useModal.ts";
import PhotoDetailModal from "@/components/Modal/PhotoDetailModal.tsx";

interface Props {
  item: IPhoto;
}
const PhotosItem = ({ item }: Props) => {
  const { isOpen, open, close } = useModal();
  return (
    <>
      <Container onClick={open}>
        <img src={item.urls.regular} alt={item.alt_description} />
      </Container>

      <PhotoDetailModal isOpen={isOpen} onClose={close} item={item} />
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
