import { httpClient } from "@/services/httpClient.ts";

export const getCollections = async (id: string) => {
  const { data } = await httpClient({
    method: "get",
    url: `collections/${id}/photos`,
  });

  return data;
};
