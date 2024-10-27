import styled from "@emotion/styled";
import { IPhoto } from "@/models/photos.ts";
interface Props {
  coverPhoto: IPhoto;
}
const Recommend = ({ coverPhoto }: Props) => {
  return (
    <Container>
      <div>
        <img
          src={coverPhoto?.urls?.regular}
          alt={coverPhoto?.alt_description}
        />
        <TextOverlay>
          <h2>Featured</h2>
          <span>{coverPhoto?.user?.name}</span>
        </TextOverlay>
      </div>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 306px;
  height: 100%;
  cursor: zoom-in;
  padding: 0;
  position: relative;

  > div {
    width: 100%;
    height: 100%;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 8px;
  }
`;

const TextOverlay = styled.div`
  position: absolute;
  bottom: 8%;
  left: 8%;
  color: white;

  h2 {
    font-size: 14px;
  }

  span {
    display: block;
    color: white;
    padding-block: 8px;
  }
`;
export default Recommend;
