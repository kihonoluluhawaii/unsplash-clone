import styled from "@emotion/styled";
import { TiPlusOutline } from "react-icons/ti";
import SearchBar from "@/components/Header/components/HeaderTop/SearchBar.tsx";
import { AiFillAmazonCircle } from "react-icons/ai";
import { ReactNode } from "react";
import { ITopicPhoto } from "@/models/topics.ts";

interface Props {
  title: string;
  curator?: boolean;
  desc: string;
  isButton?: boolean;
  buttonText?: string;
  children?: ReactNode;
  showHomeBox?: boolean;
  contributors?: Array<{
    name: string;
    username: string;
    profile_image: {
      medium: string;
    };
  }>;
  bestPhoto?: ITopicPhoto;
}

const ContentHeader = ({
  title,
  curator,
  desc,
  isButton = false,
  buttonText,
  children,
  showHomeBox,
  contributors,
  bestPhoto,
}: Props) => {
  return (
    <Container>
      <CategoryContainer>
        <CategoryDesc>
          <TextContainer>
            <Title>{title}</Title>
            {curator && <Curator>Curated by Unsplash</Curator>}
            <Desc>{desc}</Desc>
          </TextContainer>
          {children}
        </CategoryDesc>
        {isButton ? (
          <SubmitButton>
            Submit to <span>{buttonText}</span>
          </SubmitButton>
        ) : (
          <SearchBarContainer>
            <StyledSearchBar borderRadius="8px" />
          </SearchBarContainer>
        )}
      </CategoryContainer>
      <ContentBoxWithImage>
        {showHomeBox ? (
          <>
            <HomeBox>
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
            </HomeBox>
            <SecondBox>
              <TiPlusOutline />
              <TextArea>
                <h2>
                  Unlock everything <br />
                  Unsplash+ has to offer.
                </h2>
                <span>Cancel anytime.</span>
              </TextArea>
              <button>Upgrade to Unsplash+</button>
            </SecondBox>
          </>
        ) : (
          <>
            <BaseBox>
              <BaseBoxTitle>Top Contributors</BaseBoxTitle>
              {contributors?.slice(0, 4).map((contributor, index) => (
                <Contributor key={index}>
                  <img
                    src={contributor.profile_image?.medium}
                    alt={contributor.name}
                  />
                  <div>
                    <span>{contributor.name}</span>
                    <span>{contributor.username}</span>
                  </div>
                </Contributor>
              ))}
            </BaseBox>
            <CoverBox>
              <div>
                <img
                  src={bestPhoto?.urls?.regular}
                  alt={bestPhoto?.alt_description}
                />
                <TextOverlay>
                  <h2>Featured</h2>
                  <span>{bestPhoto?.user?.name}</span>
                </TextOverlay>
              </div>
            </CoverBox>
          </>
        )}
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

const Curator = styled.span`
  padding-block: 10px;
  color: #767676;
  font-weight: 500;
`;

const Desc = styled.span`
  padding: 4px 0;
  font-size: 1.125rem;
  line-height: 1.4;
  white-space: pre-wrap;
`;

const SubmitButton = styled.button`
  margin-top: 14px;
  padding: 14px 18px;
  border-radius: 6px;
  font-size: 1rem;
  font-weight: 500;
  color: white;
  background-color: black;

  span {
    font-weight: 600;
  }
`;

const SearchBarContainer = styled.div`
  width: 100%;
  height: 54px;
`;
const StyledSearchBar = styled(SearchBar)``;

const ContentBoxWithImage = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  > div {
    min-width: 306px;
    border-radius: 8px;
  }
`;

const BaseBox = styled.div`
  display: flex;
  flex-direction: column;
  height: 306px;
  width: 306px;
  padding: 20px;
  border: 1px solid #eee;
  box-sizing: border-box;
`;

const HomeBox = styled(BaseBox)`
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

const BaseBoxTitle = styled.div`
  padding-block: 4px;
  font-size: 1rem;
  font-weight: bold;
`;

const Contributor = styled.div`
  display: flex;
  gap: 8px;
  padding: 8px;
  margin-block: 2px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: #eee;
    border-radius: 12px;
  }
  img {
    width: 40px;
    border-radius: 50px;
  }

  > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2px;

    span:first-of-type {
      font-size: 16px;
      font-weight: 600;
    }

    span:last-of-type {
      font-size: 14px;
      color: #767676;
    }
  }
`;

const CoverBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;
  height: 306px;
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

const SecondBox = styled(CoverBox)`
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

export default ContentHeader;
