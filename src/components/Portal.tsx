import { ReactNode } from "react";
import { createPortal } from "react-dom";

interface Props {
  children: ReactNode;
}

const Portal = ({ children }: Props) => {
  const node = document.getElementById("modal") as HTMLElement;
  if (!node) return null;
  return createPortal(children, node);
};

export default Portal;
