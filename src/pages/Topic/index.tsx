import { useParams } from "react-router-dom";
import styled from "@emotion/styled";
import TopicContent from "@/pages/Topic/TopicContent.tsx";
import { useTopicPhotos } from "@/hooks/useTopicPhotos.ts";
import PhotosList from "@/components/photos/PhotosList.tsx";

const Topic = () => {
  const { slug } = useParams();
  const { data } = useTopicPhotos(slug);

  return (
    <Container>
      <TopicContent />
      <PhotosList data={data} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1300px;
  height: 306px;
  margin-block: 56px;
`;
export default Topic;
