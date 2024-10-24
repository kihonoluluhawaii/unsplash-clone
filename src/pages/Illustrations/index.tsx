import styled from "@emotion/styled";
import Photos from "@/components/photos";

const Illustrations = () => {
  return (
    <Container>
      <div>
        <h2>Illustrations</h2>
        <span>
          Explore the best and latest illustrations & vectors on Unsplash.
        </span>
      </div>
      <Photos />
    </Container>
  );
};

const Container = styled.div`
  > div {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    height: 100%;
    padding-block: 56px;
  }
  h2 {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
  }
  span {
    padding: 4px 0;
    font-size: 1.125rem;
    line-height: 1.4;
    white-space: pre-wrap;
  }
`;

export default Illustrations;
