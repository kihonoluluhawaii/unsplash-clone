import { useQuery } from "@tanstack/react-query";
import { getNoticeById } from "@/services/notice.ts";

export const useGetNoticeById = (id?: string) => {
  return useQuery({
    queryKey: ["notice", id],
    queryFn: () => getNoticeById(id as string),
    enabled: !!id,
  });
};
