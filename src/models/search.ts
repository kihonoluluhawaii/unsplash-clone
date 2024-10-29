import { IPhoto } from "@/models/photos.ts";

export interface ISearchResponse {
  results: IPhoto[];
  total: number;
  total_pages: number;
}
