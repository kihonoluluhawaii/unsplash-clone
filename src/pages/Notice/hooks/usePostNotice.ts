import { INotice, INoticeBody, postNotice } from "@/services/notice.ts";
import { useMutation } from "@tanstack/react-query";
import { AxiosError } from "axios";

export const usePostNotice = () => {
  const { mutateAsync } = useMutation<INotice, AxiosError, INoticeBody>({
    mutationFn: (data) => postNotice(data),
  });

  const addNotice = async ({ title, content }: INoticeBody) => {
    const notice = await mutateAsync({ title, content });
    return notice;
  };

  return {
    addNotice,
  };
};
