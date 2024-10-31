import styled from "@emotion/styled";
import ContentHeader from "@/pages/Home/ContentHeader.tsx";
import PhotosList from "@/components/photos/PhotosList.tsx";
import { usePhotos } from "@/hooks/usePhotos.ts";

const Home = () => {
  const { data } = usePhotos();

  return (
    <Container>
      <ContentHeader
        title="Unsplash"
        desc={`The internet's source for visuals. \nPowered by creators everywhere.`}
      />
      <PhotosList data={data} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1300px;
  height: 306px;
  margin-block: 56px;
`;

export default Home;
