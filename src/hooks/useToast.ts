import { useContext } from "react";
import { ToastContext } from "@/providers/ToastProvider";

export const useToast = () => {
  const value = useContext(ToastContext);
  if (value === null) {
    throw new Error("useToast 는 ToastProvider 내부에서만 사용 가능.");
  }

  return value;
};
