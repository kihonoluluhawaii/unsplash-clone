import styled from "@emotion/styled";
import { useSearchPhotos } from "@/pages/Search/hooks/useSearchPhotos.ts";
import PhotosList from "@/components/photos/PhotosList.tsx";

const SearchPhotos = () => {
  const { data } = useSearchPhotos();

  return (
    <Container>
      <PhotosList data={data?.results} />
    </Container>
  );
};

const Container = styled.div``;

export default SearchPhotos;
