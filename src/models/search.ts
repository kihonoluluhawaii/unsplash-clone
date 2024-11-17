import { IPhoto } from "@/models/photos.ts";
import { ICollection } from "@/models/collections.ts";

export interface ISearchPhotosResponse {
  results: IPhoto[];
  total: number;
  total_pages: number;
}

export interface ISearchCollectionsResponse {
  total: number;
  total_pages: number;
  results: ICollection[];
}
