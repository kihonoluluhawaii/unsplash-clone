import styled from "@emotion/styled";
import ContentHeader from "@/pages/Home/ContentHeader.tsx";
import PhotosList from "@/components/photos/PhotosList.tsx";
import { usePhotos } from "@/hooks/usePhotos.ts";
import { useCallback, useEffect, useRef, useState } from "react";
import { IPhoto } from "@/models/photos.ts";
import InfiniteScroll from "@/components/InfiniteScroll";

const Home = () => {
  const [page, setPage] = useState(1);
  const [stackData, setStackData] = useState<IPhoto[]>([]);

  const { data, isLoading } = usePhotos({ per_page: 50, page });

  useEffect(() => {
    if (!data) return;
    setStackData([...stackData, ...data]);
  }, [data]);

  const handleNext = useCallback(() => {
    setPage((p) => p + 1);
  }, []);

  return (
    <Container>
      <ContentHeader
        title="Unsplash"
        desc={`The internet's source for visuals. \nPowered by creators everywhere.`}
      />
      <InfiniteScroll onNext={handleNext}>
        <PhotosList data={stackData} />
      </InfiniteScroll>
    </Container>
  );
};

const Container = styled.div`
  margin: 0 auto;
  max-width: 1300px;
`;

export default Home;
