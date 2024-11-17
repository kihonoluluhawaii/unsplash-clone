import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import ModalContainer from "@/components/ModalLayer/ModalContainer.tsx";

interface IModalOptions {
  size?: string;
  onClose: () => void;
}

interface IModal {
  el: ReactNode;
  options?: IModalOptions;
}

type Resolver = (value: unknown) => void;
type ModalFn = (resolver: Resolver) => ReactNode;

interface IModalContext {
  modals: IModal[];
  openModal: (
    el: ReactNode | ModalFn,
    options?: IModalOptions,
  ) => Promise<unknown>;
  closeModal: (data?: unknown) => void;
}

export const ModalContext = createContext<IModalContext | null>(null);

interface Props {
  children: ReactNode;
}

const ModalLayer = ({ children }: Props) => {
  const [modals, setModals] = useState<IModal[]>([]);
  const resolverRef = useRef<(value: unknown) => void>();
  const isOpen = modals.length > 0;

  const openModal = useCallback(
    (el: ReactNode | ModalFn, options?: IModalOptions) => {
      return new Promise((resolve) => {
        const modalEl = typeof el === "function" ? el(resolve) : el;

        setModals([
          ...modals,
          {
            el: modalEl,
            options,
          },
        ]);

        resolverRef.current = resolve;
      });
    },
    [modals],
  );

  const closeModal = useCallback(
    (data?: unknown) => {
      const nextModals = [...modals];
      nextModals.pop();
      setModals(nextModals);
      resolverRef.current?.(data ?? true);
    },
    [modals],
  );

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("fixed-scroll");
    } else {
      document.body.classList.remove("fixed-scroll");
    }
  }, [isOpen]);

  return (
    <ModalContext.Provider
      value={{
        modals,
        openModal,
        closeModal,
      }}
    >
      {children}

      {modals.map((modal) => (
        <ModalContainer
          onClose={() => {
            modal.options?.onClose();
            closeModal();
          }}
        >
          {modal.el}
        </ModalContainer>
      ))}
    </ModalContext.Provider>
  );
};

export default ModalLayer;
