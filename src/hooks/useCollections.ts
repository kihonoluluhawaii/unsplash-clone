import { useQuery } from "@tanstack/react-query";
import { getCollections } from "@/services/collections.ts";

export const useCollections = () => {
  return useQuery({
    queryKey: ["search"],
    queryFn: () => getCollections(),
  });
};
