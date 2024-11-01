import styled from "@emotion/styled";
import { useSearchCollections } from "@/pages/Search/hooks/useSearchCollections.ts";
import CollectionPhotoList from "@/components/collections/CollectionPhotoList.tsx";

const SearchCollections = () => {
  const { data } = useSearchCollections();

  return (
    <Container>
      <CollectionPhotoList data={data?.results} />
    </Container>
  );
};

const Container = styled.div``;

export default SearchCollections;
