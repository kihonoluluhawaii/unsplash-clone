import styled from "@emotion/styled";
import CollectionsPhotos from "@/components/collections";

const Illustrations = () => {
  return (
    <Container>
      <div>
        <h2>Illustrations</h2>
        <span>
          Explore the best and latest illustrations & vectors on Unsplash.
        </span>
      </div>
      <CollectionsPhotos />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 0 auto;
  max-width: 1300px;
  height: 306px;
  margin-block: 56px;

  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
    padding-block: 12px;
  }
  span {
    padding: 4px 0;
    font-size: 1.125rem;
    line-height: 1.4;
    white-space: pre-wrap;
  }
`;

export default Illustrations;
