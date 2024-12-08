import styled from "@emotion/styled";
import { INotice } from "@/services/notice.ts";
import dayjs from "dayjs";

interface Props {
  item: INotice;
  onClick: () => void;
}

const NoticeItem = ({ item, onClick }: Props) => {
  return (
    <Container onClick={onClick}>
      <div className="title">{item.title}</div>
      <div className="date">
        생성일: {dayjs(item.create_at).format("YYYY-MM-DD hh:mm")}
      </div>
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
  }
  .content {
    font-size: 16px;
    color: #555;
    line-height: 1.5;
  }
`;

export default NoticeItem;
