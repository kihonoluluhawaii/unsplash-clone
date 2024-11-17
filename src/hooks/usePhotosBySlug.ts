import { useQuery } from "@tanstack/react-query";
import { getPhotosBySlug } from "@/services/photos.ts";
import { useEffect } from "react";
import { useToast } from "@/hooks/useToast.ts";

export const usePhotosBySlug = (slug: string) => {
  const { data, isError, error, ...rest } = useQuery({
    queryKey: ["photosBySlug", slug],
    queryFn: () => getPhotosBySlug(slug),
    retry: 0,
    enabled: !!slug,
  });

  const { openToast } = useToast();

  useEffect(() => {
    if (!isError) return;
    // 센트리 에러 로깅

    openToast({
      message: `usePhotosBySlug is Error\n\n ${JSON.stringify(error, null, 2)}`,
      duration: 10000,
    });
  }, [openToast, isError, error]);

  return {
    data,
    ...rest,
  };
};
