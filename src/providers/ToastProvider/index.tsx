import { createContext, ReactNode, useCallback, useState } from "react";
import Toast from "@/components/Toast";
import styled from "@emotion/styled";
import { v4 as uuidv4 } from "uuid";

export interface IToast {
  message: string;
  duration?: number; // ms
  hasClose?: boolean;
}

interface IModuleToast extends IToast {
  id: string;
}

interface IToastProps {
  toasts: IModuleToast[];
  openToast: (value: IToast) => void;
  closeToast: (value: Omit<IModuleToast, "message">) => void;
}

export const ToastContext = createContext<null | IToastProps>(null);

interface Props {
  children: ReactNode;
}

const ToastProvider = ({ children }: Props) => {
  const [toasts, setToasts] = useState<IModuleToast[]>([]);

  const openToast = (toast: IToast) => {
    const id = uuidv4();
    const newToast = { id, ...toast };
    setToasts((prevState) => {
      return [...prevState, newToast];
    });
  };

  const closeToast = useCallback(({ id }: Omit<IModuleToast, "message">) => {
    setToasts((prevToasts) => prevToasts.filter((item) => item.id !== id));
  }, []);

  return (
    <ToastContext.Provider value={{ toasts, openToast, closeToast }}>
      {children}

      {toasts.map(({ message, duration, id, hasClose }, index) => {
        return (
          <ToastBoard
            key={id}
            style={{
              bottom: `calc(50px + ${index * 50}px)`,
            }}
          >
            <Toast
              message={message}
              duration={duration}
              hasClose={hasClose}
              onClose={() => closeToast({ id, duration, hasClose })}
            />
          </ToastBoard>
        );
      })}
    </ToastContext.Provider>
  );
};

const ToastBoard = styled.div`
  position: fixed;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
`;

export default ToastProvider;
