import { httpClient } from "@/services/httpClient.ts";

export const getCollections = async () => {
  const { data } = await httpClient({
    method: "get",
    url: `collections/`,
    params: {
      per_page: 50,
    },
  });

  return data;
};
