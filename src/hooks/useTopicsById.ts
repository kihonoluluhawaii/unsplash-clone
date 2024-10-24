import { useQuery } from "@tanstack/react-query";
import { getTopicsById } from "@/services/topics.ts";

export const useTopicsById = (slug?: string) => {
  return useQuery({
    queryKey: ["topics", slug],
    queryFn: () => getTopicsById(slug as string),
    enabled: !!slug,
  });
};
