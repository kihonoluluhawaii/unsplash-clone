import { httpClient } from "@/services/httpClient.ts";
import { ITopic } from "@/models/topics.ts";
import { IPhoto } from "@/models/photos.ts";

export interface ITopicsParams {
  ids?: string;
  page?: number;
  per_page?: number;
  order_by?: "featured" | "latest" | "oldest" | "position";
}

export const getTopics = async (params: ITopicsParams = {}) => {
  const { data } = await httpClient<ITopic[]>({
    method: "get",
    url: `/topics`,
    params,
  });

  return data;
};

export const getTopicsById = async (slug: string) => {
  const { data } = await httpClient<ITopic>({
    method: "get",
    url: `/topics/${slug}`,
  });

  return data;
};

export const getTopicPhotos = async (slug: string) => {
  const { data } = await httpClient<IPhoto[]>({
    method: "get",
    url: `/topics/${slug}/photos`,
    params: {
      per_page: 30,
    },
  });
  return data;
};
