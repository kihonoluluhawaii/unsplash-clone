import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID IR9TROabT-PyuW-g9e5fs-RXeSxMzIp9O9mo70Gh6zM",
  },
});
