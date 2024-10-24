import { httpClient } from "@/services/httpClient.ts";
import { ITopic } from "@/models/topics.ts";

export const getTopics = async () => {
  const { data } = await httpClient<ITopic[]>({
    method: "get",
    url: `/topics`,
    params: {
      per_page: 30,
    },
  });

  return data;
};

export const getTopicsById = async (id: string) => {
  const { data } = await httpClient({
    method: "get",
    url: `/topics/${id}`,
  });

  return data;
};
