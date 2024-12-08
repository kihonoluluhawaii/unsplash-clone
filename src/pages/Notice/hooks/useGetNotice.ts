import { getNotice } from "@/services/notice.ts";
import { useQuery } from "@tanstack/react-query";
import { useMemo } from "react";

export const useGetNotice = () => {
  const { data, ...rest } = useQuery({
    queryKey: ["notice"],
    queryFn: () => getNotice(),
  });

  const filteredData = useMemo(() => data?.map((item) => item), [data]);

  return {
    data: filteredData,
    ...rest,
  };
};
