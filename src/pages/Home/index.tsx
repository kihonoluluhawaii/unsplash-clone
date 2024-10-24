import styled from "@emotion/styled";
import Photos from "@/components/photos";
import ContentHeader from "@/components/ContentHeader";
import { BiCustomize } from "react-icons/bi";

const Home = () => {
  return (
    <Container>
      <ContentHeader
        title="Unsplash"
        desc={`The internet's source for visuals. \nPowered by creators everywhere.`}
        isButton={false}
        children={
          <Sponsor>
            <h2>Supported by</h2>
            <BiCustomize />
            <span>SQUARESPACE</span>
          </Sponsor>
        }
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

const Sponsor = styled.div`
  display: flex;
  align-items: flex-end;
  justify-content: flex-end;
  padding: 8px 0;
  gap: 6px;
  h2 {
    letter-spacing: 0.2px;
    font-size: 12px;
  }
  span {
    font-size: 12px;
    font-weight: 600;
    letter-spacing: 1px;
  }
  @media (max-width: 1186px) {
    justify-content: flex-start;
  }
`;

export default Home;
