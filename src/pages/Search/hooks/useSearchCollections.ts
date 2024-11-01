import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { searchCollections } from "@/services/search.ts";

export const useSearchCollections = () => {
  const { query = "" } = useParams<{ query: string }>();
  const { data } = useQuery({
    queryKey: ["search/collections", query],
    queryFn: () =>
      searchCollections({
        query: query || "",
        page: 1,
        per_page: 30,
      }),
  });

  return { data };
};
