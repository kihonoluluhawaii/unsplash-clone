import { useQuery } from "@tanstack/react-query";
import { searchPhotos } from "@/services/search.ts";
import { useParams } from "react-router-dom";

export const useSearchPhotos = () => {
  const { query = "" } = useParams();
  const { data } = useQuery({
    queryKey: ["search", query],
    queryFn: () =>
      searchPhotos({
        query,
        page: 1,
        per_page: 30,
      }),
  });

  console.log("@@ data", data);
  return {
    data,
  };
};
