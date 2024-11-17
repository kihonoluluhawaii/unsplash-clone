import { useQuery } from "@tanstack/react-query";
import { getPhotosRelated } from "@/services/photos.ts";
import { useEffect } from "react";
import { useToast } from "@/hooks/useToast.ts";

export const usePhotosRelated = (slug: string) => {
  const { data, isError, error, ...rest } = useQuery({
    queryKey: ["photosRelated", slug],
    queryFn: () => getPhotosRelated(slug),
    retry: 0,
    enabled: !!slug,
  });

  const { openToast } = useToast();

  useEffect(() => {
    if (!isError) return;
    // 센트리 에러 로깅

    openToast({
      message: `usePhotosRelated is Error\n\n ${JSON.stringify(error, null, 2)}`,
      duration: 10000,
    });
  }, [openToast, isError, error]);

  return {
    data,
    ...rest,
  };
};
