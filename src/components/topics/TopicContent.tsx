import styled from "@emotion/styled";
import ContentHeader from "@/components/ContentHeader";
import { ITopic, ITopicPhoto } from "@/models/topics.ts";
import TopicPhotoList from "@/components/topics/TopicPhotoList.tsx";

interface Props {
  data: ITopic;
  photoData: ITopicPhoto[];
  bestPhoto: ITopicPhoto;
}

const TopicContent = ({ data, photoData, bestPhoto }: Props) => {
  return (
    <Container>
      <ContentHeader
        title={data?.title}
        desc={data?.description}
        curator={true}
        isButton={true}
        buttonText={data?.title}
        contributors={data?.top_contributors}
        bestPhoto={bestPhoto}
      />
      <TopicPhotoList data={photoData} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 56px;
`;

export default TopicContent;
