import styled from "@emotion/styled";
import { useCollections } from "@/hooks/useCollections.ts";
import CollectionPhotoList from "@/components/collections/CollectionPhotoList.tsx";

const CollectionsPhotos = () => {
  const { data } = useCollections();

  console.log("@@ data", data);

  return (
    <Container>
      <CollectionPhotoList data={data} />
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

export default CollectionsPhotos;
