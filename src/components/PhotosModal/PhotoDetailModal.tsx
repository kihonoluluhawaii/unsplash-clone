import styled from "@emotion/styled";
import { IPhoto } from "@/models/photos.ts";
import PhotosDetail from "@/components/photos/detail/PhotosDetail.tsx";
import PhotosRelated from "@/components/photos/PhotosRelated.tsx";
import { usePhotosRelated } from "@/hooks/usePhotosRelated.ts";

interface Props {
  item: IPhoto;
}

const PhotoDetailModal = ({ item }: Props) => {
  const { data: relatedPhotos } = usePhotosRelated(item.slug as string);
  return (
    <Container className={"PhotoDetailModal"}>
      <PhotosDetail item={item} />
      <PhotosRelated data={relatedPhotos?.results} />
    </Container>
  );
};

const Container = styled.div``;

export default PhotoDetailModal;
