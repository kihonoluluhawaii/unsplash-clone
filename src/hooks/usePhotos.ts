import { useQuery } from "@tanstack/react-query";
import { getPhotos, IParams } from "@/services/photos.ts";
import { useEffect } from "react";
import { useToast } from "@/hooks/useToast.ts";

export const usePhotos = (params?: IParams) => {
  const { data, isError, error, ...rest } = useQuery({
    queryKey: ["photos", params?.per_page, params?.page],
    queryFn: () => getPhotos(params),
    retry: 0,
  });

  const { openToast } = useToast();

  useEffect(() => {
    if (!isError) return;
    // 센트리 에러 로깅

    openToast({
      message: `usePhotos is Error\n\n ${JSON.stringify(error, null, 2)}`,
      duration: 10000,
    });
  }, [error, isError, openToast]);

  return {
    data,
    ...rest,
  };
};
