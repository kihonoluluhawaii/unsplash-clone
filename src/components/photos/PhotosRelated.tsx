import styled from "@emotion/styled";
import { IPhoto } from "@/models/photos.ts";
import PhotosList from "@/components/photos/PhotosList.tsx";

interface Props {
  data?: IPhoto[];
}

const PhotosRelated = ({ data = [] }: Props) => {
  return (
    <Container>
      <PhotosList data={data} />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export default PhotosRelated;
