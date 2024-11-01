import styled from "@emotion/styled";
import { useNavigate, useParams } from "react-router-dom";
import React, { lazy, useEffect } from "react";
import SearchRelated from "@/pages/Search/components/SearchRelated.tsx";

const SearchPhotos = lazy(() => import("@/pages/Search/photos"));
const SearchCollections = lazy(() => import("@/pages/Search/collections"));
const SearchUsers = lazy(() => import("@/pages/Search/users"));

const SEARCH_CATEGORIES = ["photos", "collections", "users"] as const;

export type ISearchCategories = (typeof SEARCH_CATEGORIES)[number];

const SearchComponentsMap: Record<ISearchCategories, React.FC> = {
  photos: SearchPhotos,
  collections: SearchCollections,
  users: SearchUsers,
};

const Search = () => {
  const navigate = useNavigate();
  const { category, query } = useParams<{
    category: ISearchCategories;
    query: string;
  }>();

  const isValidCategory = SEARCH_CATEGORIES.includes(
    category as ISearchCategories,
  );

  useEffect(() => {
    if (!isValidCategory || !query) {
      navigate("/not-found");
    }
  }, [isValidCategory]);

  if (!isValidCategory || !category) return "로딩중..";

  const Component = SearchComponentsMap[category];
  return (
    <Container>
      <Title>
        {query ? query.charAt(0).toUpperCase() + query.slice(1) : ""}
      </Title>
      <SearchRelated />
      <Component />
    </Container>
  );
};

const Container = styled.div`
  max-width: 1300px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Title = styled.div`
  font-size: 28px;
  font-weight: 800;
  margin-block: 30px;
`;

export default Search;
