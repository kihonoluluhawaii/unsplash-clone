import { httpClient } from "@/services/httpClient.ts";
import { ITopic, ITopicPhoto } from "@/models/topics.ts";

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

export const getTopicsById = async (slug: string) => {
  const { data } = await httpClient({
    method: "get",
    url: `/topics/${slug}`,
  });

  return data;
};

export const getTopicPhotos = async (slug: string) => {
  const { data } = await httpClient<ITopicPhoto[]>({
    method: "get",
    url: `/topics/${slug}/photos`,
    params: {
      per_page: 30,
    },
  });
  return data;
};
