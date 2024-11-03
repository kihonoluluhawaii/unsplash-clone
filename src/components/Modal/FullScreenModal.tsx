import styled from "@emotion/styled";
import { IPhoto } from "@/models/photos.ts";

interface Props {
  item: IPhoto;
  onClose: () => void;
}

const FullScreenModal = ({ item, onClose }: Props) => {
  return (
    <Container onClick={onClose}>
      <div>
        <img src={item.urls.full} alt={item.alt_description} />
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: fixed;
  inset: 0;
  width: 100vw;
  height: 100vh;
`;

export default FullScreenModal;
