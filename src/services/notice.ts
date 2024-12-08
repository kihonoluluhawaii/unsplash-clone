import { noticeHttpClient } from "@/services/httpClient.ts";

interface IParams {
  perPage?: number;
}

interface INoticeResponse<T> {
  ok: boolean;
  data: T;
}

export interface INotice {
  _id: string;
  title: string;
  content: string;
  create_at: string;
}

export const getNotice = async ({ perPage }: IParams = {}) => {
  const { data } = await noticeHttpClient<INoticeResponse<INotice[]>>({
    method: "GET",
    url: `/notice`,
    params: {
      per_page: perPage,
    },
  });

  return data?.data;
};

export const getNoticeById = async (id: string) => {
  console.log("@@ id", id);
  const { data } = await noticeHttpClient<INoticeResponse<INotice>>({
    method: "GET",
    url: `/notice/${id}`,
  });

  return data?.data;
};

export interface INoticeBody {
  title: string;
  content: string;
}

export const postNotice = async ({ title, content }: INoticeBody) => {
  const { data } = await noticeHttpClient<INoticeResponse<INotice>>({
    method: "POST",
    url: `/notice`,
    data: {
      title,
      content,
    },
  });

  return data?.data;
};
