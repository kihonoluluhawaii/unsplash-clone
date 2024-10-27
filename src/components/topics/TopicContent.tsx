import styled from "@emotion/styled";
import { ITopicPhoto } from "@/models/topics.ts";
import TopicPhotoList from "@/components/topics/TopicPhotoList.tsx";
import TopExhibitor from "@/components/topics/TopExhibitor.tsx";
import Recommend from "@/components/topics/Recommend.tsx";

interface Props {
  photoData: ITopicPhoto[];
  bestPhoto: ITopicPhoto;
  title: string;
  desc: string;
  buttonText?: string;
  contributors?: Array<{
    name: string;
    username: string;
    profile_image: {
      medium: string;
    };
  }>;
}

const TopicContent = ({
  title,
  desc,
  buttonText,
  photoData,
  contributors,
  bestPhoto,
}: Props) => {
  return (
    <Container>
      <ContentContainer>
        <Overview>
          <TextContainer>
            <div className="title">{title}</div>
            <div className="info">Curated by Unsplash</div>
            <div className="description">{desc}</div>
            <button>
              Submit to <span>{buttonText}</span>
            </button>
          </TextContainer>
        </Overview>
        <TopExhibitor contributors={contributors} />
        <Recommend bestPhoto={bestPhoto} />
      </ContentContainer>
      <TopicPhotoList data={photoData} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const ContentContainer = styled.div`
  display: flex;
  height: 100%;
  gap: 24px;
  margin-bottom: 56px;
`;

const Overview = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  gap: 10px;
  @media (max-width: 1186px) {
    flex-direction: column;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  .title {
    font-size: 2.5rem;
    font-weight: 700;
    line-height: 1.2;
  }

  .info {
    padding-block: 10px;
    color: #767676;
    font-weight: 500;
  }

  .description {
    padding: 4px 0;
    font-size: 1.125rem;
    line-height: 1.4;
    white-space: pre-wrap;
  }

  button {
    width: fit-content;
    margin-top: 14px;
    padding: 14px 18px;
    border-radius: 6px;
    font-size: 1rem;
    font-weight: 500;
    color: white;
    background-color: black;
    cursor: pointer;
    transition: background-color 0.2s;

    &:hover {
      background-color: #232323;
    }

    span {
      font-weight: 600;
    }
  }
`;

export default TopicContent;
