import { useQuery } from "@tanstack/react-query";
import { getCollections } from "@/services/collections.ts";

export const useCollections = (id?: string) => {
  return useQuery({
    queryKey: ["collections", id],
    queryFn: () => getCollections(id as string),
    enabled: !!id,
  });
};
