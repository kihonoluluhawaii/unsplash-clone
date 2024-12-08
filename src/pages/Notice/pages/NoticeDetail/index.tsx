import styled from "@emotion/styled";
import { useGetNoticeById } from "@/pages/Notice/hooks/useGetNoticeById.ts";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";

const NoticeDetail = () => {
  const { id } = useParams();
  const { data } = useGetNoticeById(id);
  if (!data) return null;

  return (
    <Container>
      <div className="title">{data.title}</div>
      <div className="date">
        생성일: {dayjs(data.create_at).format("YYYY-MM-DD hh:mm")}
      </div>
      <div className="content">{data.content}</div>
    </Container>
  );
};

const Container = styled.div`
  max-width: 640px;
  padding: 20px 24px;
  border-radius: 16px;
  background-color: #eee;
  margin: 24px auto;
  .title {
    font-size: 20px;
    margin-bottom: 10px;
    font-weight: bold;
    color: #222;
  }
  .date {
    font-size: 13px;
    text-align: right;
    color: #777;
    margin-bottom: 32px;
  }
  .content {
    font-size: 16px;
    color: #555;
    line-height: 1.5;
    white-space: pre-wrap;
  }
`;

export default NoticeDetail;
