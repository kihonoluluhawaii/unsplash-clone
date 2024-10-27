import { httpClient } from "@/services/httpClient.ts";
import { IPhoto } from "@/models/photos.ts";

interface ISearchParams {
  query?: string;
  page?: number;
  per_page?: number;
  order_by?: "relevant" | "latest";
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

export const searchPhotos = async (params: ISearchParams = {}) => {
  const { data } = await httpClient<IPhoto[]>({
    method: "GET",
    url: "/search/photos",
    params,
  });

  return data;
};
