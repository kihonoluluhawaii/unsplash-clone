import { AiFillAmazonCircle } from "react-icons/ai";
import { TiPlusOutline } from "react-icons/ti";
import styled from "@emotion/styled";
import { BiCustomize } from "react-icons/bi";
import SearchBox from "@/components/SearchBox";

interface Props {
  title: string;
  desc: string;
}

const HomeConTentHeader = ({ title, desc }: Props) => {
  return (
    <Container>
      <CategoryContainer>
        <CategoryDesc>
          <TextContainer>
            <Title>{title}</Title>
            <Desc>{desc}</Desc>
          </TextContainer>
          <Sponsor>
            <h2>Supported by</h2>
            <BiCustomize />
            <span>SQUARESPACE</span>
          </Sponsor>
        </CategoryDesc>
        <SearchBarContainer>
          <SearchBox type={"square"} />
        </SearchBarContainer>
      </CategoryContainer>
      <ContentBoxWithImage>
        <AwardBox>
          <TextArea>
            <h2>Unsplash Awards 2024</h2>
            <span>
              Now accepting submissions to
              <br />
              the 8th edition of the Unsplash <br />
              Awards
            </span>
            <AiFillAmazonCircle />
          </TextArea>
        </AwardBox>
        <SubscribeBox>
          <TiPlusOutline />
          <TextArea>
            <h2>
              Unlock everything <br />
              Unsplash+ has to offer.
            </h2>
            <span>Cancel anytime.</span>
          </TextArea>
          <button>Upgrade to Unsplash+</button>
        </SubscribeBox>
      </ContentBoxWithImage>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 24px;
`;

const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 100%;
  gap: 10px;
`;

const CategoryDesc = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media (max-width: 1186px) {
    flex-direction: column;
  }
`;

const SearchBarContainer = styled.div`
  width: 100%;
  height: 54px;
`;

const ContentBoxWithImage = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  > div {
    min-width: 306px;
    border-radius: 8px;
  }
`;

const AwardBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 306px;
  width: 306px;
  padding: 20px;
  border: 1px solid #eee;
  box-sizing: border-box;
  text-align: center;
  justify-content: center;
  background-image: url("../../../public/images/bay.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: black;
  color: #b0b0b0;
  cursor: pointer;
`;

const TextArea = styled.div`
  h2 {
    font-size: 1.2rem;
    line-height: 1.6;
  }

  span {
    font-size: 1rem;
    line-height: 1.6;
  }
  svg {
    margin-left: 6px;
  }
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

const SubscribeBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 306px;
  padding: 20px;
  border: 1px solid #ddd;
  cursor: pointer;
  svg {
    width: 40px;
    height: 40px;
  }

  h2 {
    font-weight: bold;
  }
  span {
    font-size: 1rem;
    font-weight: bold;
    color: #767676;
  }
  button {
    width: 176px;
    margin-top: auto;
    padding: 10px 12px;
    text-align: start;
    color: white;
    font-weight: bold;
    background-color: black;
    border-radius: 6px;
    cursor: pointer;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: 100%;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  font-weight: 700;
  line-height: 1.2;
`;

const Desc = styled.span`
  padding: 4px 0;
  font-size: 1.125rem;
  line-height: 1.4;
  white-space: pre-wrap;
`;
export default HomeConTentHeader;
