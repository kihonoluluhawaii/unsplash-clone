import { useQuery } from "@tanstack/react-query";
import { searchPhotos } from "@/services/search.ts";
import { useParams } from "react-router-dom";

export const useSearchPhotos = () => {
  const { query = "" } = useParams<{ query: string }>();
  const { data } = useQuery({
    queryKey: ["search/photos", query],
    queryFn: () =>
      searchPhotos({
        query: query || "",
        page: 1,
        per_page: 30,
      }),
  });
  return {
    data,
  };
};
