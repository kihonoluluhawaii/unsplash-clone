import styled from "@emotion/styled";
import { IToast } from "@/providers/ToastProvider";
import { useEffect } from "react";

const Toast = ({
  message,
  duration,
  hasClose,
  onClose,
}: IToast & { onClose: () => void }) => {
  useEffect(() => {
    const task = setTimeout(() => {
      onClose();
    }, duration ?? 3000);
    return () => {
      clearTimeout(task);
    };
  }, [duration]);

  return (
    <Container>
      {message}
      {hasClose && (
        <div className="btn-close" onClick={onClose}>
          X
        </div>
      )}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px 24px;
  border-radius: 100px;
  background-color: #fff;
  color: #333;
  white-space: pre-wrap;
`;

export default Toast;
