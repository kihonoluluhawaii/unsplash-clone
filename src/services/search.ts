import { httpClient } from "@/services/httpClient.ts";
import { ISearchResponse } from "@/models/search.ts";

interface ISearchParams {
  query: string;
  page?: number;
  per_page?: number;
  order_by?: "relevant" | " latest";
  collections?: string;
  content_filter?: "low" | "high";
  color?:
    | "black_and_white"
    | "black"
    | "white"
    | "yellow"
    | "orange"
    | "red"
    | "purple"
    | "magenta"
    | "green"
    | "teal"
    | "blue";
  orientation?: "landscape" | "portrait" | "squarish";
}

export const searchPhotos = async (params: ISearchParams) => {
  const { data } = await httpClient<ISearchResponse>({
    method: "get",
    url: "/search/photos",
    params,
  });
  return data;
};

export const searchCollections = async (params: ISearchParams) => {
  const { data } = await httpClient<ISearchResponse>({
    method: "get",
    url: "/search/collections",
    params,
  });
  return data;
};
