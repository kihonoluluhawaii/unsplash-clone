import { useQuery } from "@tanstack/react-query";
import { getTopics, ITopicsParams } from "@/services/topics.ts";

export const useTopics = (params: ITopicsParams = {}) => {
  return useQuery({
    queryKey: [
      "topic",
      params.page,
      params.per_page,
      params.ids,
      params.order_by,
    ],
    queryFn: () => getTopics(params),
  });
};
