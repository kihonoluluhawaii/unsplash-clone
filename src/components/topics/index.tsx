import { useParams } from "react-router-dom";
import { useTopicsById } from "@/hooks/useTopicsById.ts";
import styled from "@emotion/styled";
import TopicContent from "@/components/topics/TopicContent.tsx";
import { useTopicPhotos } from "@/hooks/useTopicPhotos.ts";

const Topic = () => {
  const { slug } = useParams();
  const { data } = useTopicsById(slug);
  const { data: photoData = [] } = useTopicPhotos(slug);
  const bestPhoto = photoData?.[Math.floor(Math.random() * photoData.length)];
  console.log("@@ best", bestPhoto);

  return (
    <Container>
      <TopicContent data={data} photoData={photoData} bestPhoto={bestPhoto} />
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
