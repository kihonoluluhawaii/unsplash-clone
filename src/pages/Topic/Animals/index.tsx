import styled from "@emotion/styled";
import ContentHeader from "@/components/ContentHeader";
import { ITopic } from "@/models/topics.ts";

interface Props {
  data: ITopic;
}

const Animals = ({ data }: Props) => {
  console.log("@@ data", data);
  return (
    <Container>
      <ContentHeader
        title={data?.title}
        desc={data?.description}
        curator={true}
        isButton={true}
        buttonText={data?.title}
      />
    </Container>
  );
};

const Container = styled.div``;

export default Animals;
