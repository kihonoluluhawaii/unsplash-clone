import { useParams } from "react-router-dom";
import { useTopicsById } from "@/hooks/useTopicsById.ts";
import Animals from "@/pages/Topic/Animals";
import styled from "@emotion/styled";

const Topic = () => {
  const { slug } = useParams();
  const { data } = useTopicsById(slug);
  console.log("Fetched Data:", data);

  switch (slug) {
    case "animals":
      return (
        <Container>
          <Animals data={data} />
        </Container>
      );

    default:
      return <div>Not found</div>;
  }
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
