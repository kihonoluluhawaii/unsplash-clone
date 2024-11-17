import styled from "@emotion/styled";
import { useParams } from "react-router-dom";
import { usePhotosBySlug } from "@/hooks/usePhotosBySlug.ts";
import PhotosDetail from "@/components/photos/detail/PhotosDetail.tsx";
import { usePhotosRelated } from "@/hooks/usePhotosRelated.ts";
import PhotosRelated from "@/components/photos/PhotosRelated.tsx";

const Photos = () => {
  const { slug } = useParams();
  const { data } = usePhotosBySlug(slug as string);
  const { data: relatedPhotos } = usePhotosRelated(slug as string);

  if (!data) return <div>로딩중</div>;

  return (
    <Container>
      <PhotosDetail item={data} />
      <PhotosRelated data={relatedPhotos?.results} />
    </Container>
  );
};

const Container = styled.div``;

export default Photos;
