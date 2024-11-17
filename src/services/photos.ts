import { IPhoto } from "@/models/photos.ts";
import { httpClient } from "@/services/httpClient.ts";

// API = IR9TROabT-PyuW-g9e5fs-RXeSxMzIp9O9mo70Gh6zM

export interface IParams {
  per_page?: number;
  page?: number;
}
export const getPhotos = async (params?: IParams) => {
  const { data } = await httpClient<IPhoto[]>({
    method: "GET",
    url: "/photos",
    params,
  });

  return data;
};

export const getPhotosBySlug = async (slug: string) => {
  const { data } = await httpClient<IPhoto>({
    method: "GET",
    url: `/photos/${slug}`,
  });

  return data;
};

export const getPhotosRelated = async (slug: string) => {
  const { data } = await httpClient<{
    total: number;
    results: IPhoto[];
  }>({
    method: "GET",
    url: `/photos/${slug}/related`,
  });

  return data;
};
