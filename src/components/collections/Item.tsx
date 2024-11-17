import styled from "@emotion/styled";
import { ICollection } from "@/models/collections.ts";
import RatioBox from "@/components/RatioBox";

interface Props {
  item: ICollection;
}
const Item = ({ item }: Props) => {
  const photos = item?.preview_photos?.slice(0, 3);

  return (
    <Container className={"item"}>
      <RatioBox width={10} height={7}>
        <Card>
          <BigImage>
            <img src={photos[0]?.urls.regular} alt={photos[0]?.id} />
          </BigImage>
          <SmallImage>
            <Box>
              <img src={photos[1]?.urls.regular} alt={photos[1]?.id} />
            </Box>
            <Box>
              <img src={photos[2]?.urls.regular} alt={photos[2]?.id} />
            </Box>
          </SmallImage>
        </Card>
      </RatioBox>
    </Container>
  );
};

const Container = styled.div``;

const Card = styled.div`
  display: flex;
  gap: 4px;
  border-radius: 9px;
  overflow: hidden;
`;

const BigImage = styled.div`
  width: 66%;
  height: 100%;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const SmallImage = styled.div`
  width: 34%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Box = styled.div`
  height: 50%;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export default Item;
