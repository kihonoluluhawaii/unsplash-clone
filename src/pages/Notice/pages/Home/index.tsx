import styled from "@emotion/styled";
import { useGetNotice } from "@/pages/Notice/hooks/useGetNotice.ts";
import NoticeItem from "@/pages/Notice/components/NoticeItem.tsx";
import { useNavigate } from "react-router-dom";

const NoticePage = () => {
  const { data } = useGetNotice();
  const navigate = useNavigate();
  console.log("@@ data", data);
  if (!data) return null;

  const handleItemClick = (id: string) => {
    navigate(`/notice/${id}`);
  };

  const handleAddClick = () => {
    navigate("/notice/add");
  };

  return (
    <Container>
      {data.map((item) => (
        <NoticeItem item={item} onClick={() => handleItemClick(item._id)} />
      ))}
      <div className="btn-add" onClick={handleAddClick}>
        글쓰기
      </div>
    </Container>
  );
};

const Container = styled.div`
  .btn-add {
    position: fixed;
    right: 60px;
    bottom: 120px;
    padding: 12px 24px;
    border-radius: 6px;
    background-color: #18f;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    user-select: none;
  }
`;

export default NoticePage;
