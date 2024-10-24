import styled from "@emotion/styled";
import { usePhotos } from "@/components/photos/hooks/usePhotos.ts";
import PhotoList from "@/components/photos/PhotoList.tsx";

const Photos = () => {
  const { data } = usePhotos();

  return (
    <Container>
      <PhotoList data={data} />
    </Container>
  );
};

const Container = styled.div`
  margin-top: 56px;
`;

export default Photos;
