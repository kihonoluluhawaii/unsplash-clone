import { useQuery } from "@tanstack/react-query";
import { getTopics } from "@/services/topics.ts";

export const useTopics = () => {
  return useQuery({
    queryKey: ["Topic"],
    queryFn: () => getTopics(),
  });
};
