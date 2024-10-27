import styled from "@emotion/styled";
import TopExhibitor from "@/pages/Topic/TopExhibitor.tsx";
import Recommend from "@/pages/Topic/Recommend.tsx";
import { useParams } from "react-router-dom";
import { useTopicsById } from "@/hooks/useTopicsById.ts";

const TopicContent = () => {
  const { slug } = useParams();
  const { data } = useTopicsById(slug);
  if (!data) return;
  const { title, description, top_contributors, cover_photo } = data;
  return (
    <Container>
      <ContentContainer>
        <Overview>
          <TextContainer>
            <div className="title">{title}</div>
            <div className="info">Curated by Unsplash</div>
            <div className="description">{description}</div>
            <button>
              Submit to <span>{title}</span>
            </button>
          </TextContainer>
        </Overview>
        <TopExhibitor contributors={top_contributors} />
        <Recommend coverPhoto={cover_photo} />
      </ContentContainer>
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
