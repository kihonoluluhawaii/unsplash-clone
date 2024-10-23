import styled from "@emotion/styled";
import { TiPlusOutline } from "react-icons/ti";
import SearchBar from "@/components/Header/components/HeaderTop/SearchBar.tsx";
import { BiCustomize } from "react-icons/bi";
import { MdPersonPinCircle } from "react-icons/md";
import { AiFillAmazonCircle } from "react-icons/ai";

const MainHeader = () => {
  return (
    <Container>
      <MainWithSearchBar>
        <TitleWithSponsor>
          <TitleContainer>
            <Title>Unsplash</Title>
            <SubTitle>
              The internet's source for visuals.
              <br /> Powered by creators everywhere.
            </SubTitle>
          </TitleContainer>
          <Sponsor>
            <h2>Supported by</h2>
            <BiCustomize />
            <span>SQUARESPACE</span>
          </Sponsor>
        </TitleWithSponsor>
        <SearchBarContainer>
          <StyledSearchBar borderRadius="8px" />
        </SearchBarContainer>
      </MainWithSearchBar>
      <AwardAndUpsellContainer>
        <Award>
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
        </Award>
        <UpsellContainer>
          <TiPlusOutline />
          <TextArea>
            <h2>
              Unlock everything <br />
              Unsplash+ has to offer.
            </h2>
            <span>Cancel anytime.</span>
          </TextArea>
          <button>Upgrade to Unsplash+</button>
        </UpsellContainer>
      </AwardAndUpsellContainer>
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

const MainWithSearchBar = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  gap: 10px;
`;

const TitleWithSponsor = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 100%;

  @media (max-width: 1186px) {
    flex-direction: column;
  }
`;
const TitleContainer = styled.div`
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

const SubTitle = styled.span`
  padding: 4px 0;
  font-size: 1.125rem;
  line-height: 1.4;
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

const SearchBarContainer = styled.div`
  height: 54px;
`;
const StyledSearchBar = styled(SearchBar)``;

const AwardAndUpsellContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  > div {
    min-width: 306px;
    border-radius: 8px;
  }
`;

const Award = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  height: 306px;
  width: 306px;
  background-image: url("../../../../public/images/bay.png");
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: #b6b4b4;
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

const UpsellContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 20px;
  gap: 14px;
  border: 1px solid #ddd;
  height: 306px;
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
  }
`;

export default MainHeader;
