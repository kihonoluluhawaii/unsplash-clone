import { useQuery } from "@tanstack/react-query";
import { getTopicPhotos } from "@/services/topics.ts";

export const useTopicPhotos = (slug?: string) => {
  return useQuery({
    queryKey: ["topics", slug],
    queryFn: () => getTopicPhotos(slug as string),
    enabled: !!slug,
  });
};
