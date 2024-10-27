import styled from "@emotion/styled";
import Photos from "@/components/photos";
import HomeConTentHeader from "@/pages/Home/HomeContentHeader.tsx";

const Home = () => {
  return (
    <Container>
      <HomeConTentHeader
        title="Unsplash"
        desc={`The internet's source for visuals. \nPowered by creators everywhere.`}
      />
      <Photos />
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
