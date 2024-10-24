import { useQuery } from "@tanstack/react-query";
import { getPhotos } from "@/services/photos.ts";

export const usePhotos = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["photos"],
    queryFn: getPhotos,
  });

  return {
    data,
    ...rest,
  };
};
