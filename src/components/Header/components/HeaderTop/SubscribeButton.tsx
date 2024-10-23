import styled from "@emotion/styled";

const SubscribeButton = () => {
  return (
    <Container>
      <button>Get Unsplash+</button>
    </Container>
  );
};

const Container = styled.div`
  flex-grow: 1;

  button {
    cursor: pointer;
  }

  @media (max-width: 992px) {
    display: none;
  }
`;

export default SubscribeButton;
