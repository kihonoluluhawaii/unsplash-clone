import { useContext } from "react";
import { ModalContext } from "@/components/ModalLayer";

export const useModal = () => {
  const values = useContext(ModalContext);
  if (values === null) {
    throw new Error(
      "useModal 은 ModalContext.Provider 내부에서 사용 가능합니다",
    );
  }

  return values;
};
