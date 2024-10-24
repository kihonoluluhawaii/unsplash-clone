import axios from "axios";
import { IPhoto } from "@/models/photos.ts";

// API = IR9TROabT-PyuW-g9e5fs-RXeSxMzIp9O9mo70Gh6zM

export const getPhotos = async () => {
  const { data } = await axios<IPhoto[]>({
    baseURL: "https://api.unsplash.com/",
    method: "GET",
    url: "/photos",
    headers: {
      Authorization: "Client-ID IR9TROabT-PyuW-g9e5fs-RXeSxMzIp9O9mo70Gh6zM",
    },
  });

  return data;
};
