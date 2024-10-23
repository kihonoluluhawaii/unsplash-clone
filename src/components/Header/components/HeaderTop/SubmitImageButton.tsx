import styled from "@emotion/styled";

const SubmitImageButton = () => {
  return (
    <Container>
      <form>
        <button>Submit an image</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  flex-grow: 1;
  white-space: pre;

  button {
    padding: 6px 12px;
    border: 1px solid #eee;
    border-radius: 6px;
    cursor: pointer;
    color: #767676;
    transition: color 0.2s ease-in-out;
    box-shadow: 0 0 1px rgba(178, 178, 178);
    &:hover {
      color: black;
      border: 1px solid black;
    }
  }
`;

export default SubmitImageButton;
