import styled from "@emotion/styled";
import MainHeader from "@/pages/Home/components/MainHeader.tsx";

const Home = () => {
  return (
    <Container>
      <MainHeader />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 0 auto;
  max-width: 1300px;
  height: 306px;
  margin-block: 56px;
`;

export default Home;
