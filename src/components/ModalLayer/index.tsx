import React, {
  createContext,
  ReactNode,
  useCallback,
  useRef,
  useState,
} from "react";
import cn from "classnames";
import { IconLeft, IconX } from "@/components/Icons";
import styled from "@emotion/styled";

interface IModalOptions {
  size?: string;
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
      resolverRef.current?.(data);
    },
    [modals],
  );

  const handleModalInside = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

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
        <Container
          className={cn("ModalContainer")}
          onClick={() => closeModal("딤클릭!")}
        >
          <Box>
            <IconX />
            <Overlay />
            <ControlBox onClick={handleModalInside}>
              <PrevButton>
                <IconLeft />
              </PrevButton>
              <Content>{modal.el}</Content>
              <NextButton>
                <IconLeft />
              </NextButton>
            </ControlBox>
          </Box>
        </Container>
      ))}
    </ModalContext.Provider>
  );
};

const Container = styled.div`
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  width: 100%;
  overflow-y: auto;
`;

const Box = styled.div`
  margin: 40px;
  > svg {
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    color: white;
    margin: 10px;
    cursor: pointer;
    z-index: 1;
    &:hover {
      color: #ddd;
    }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  cursor: zoom-out;
`;

const ControlBox = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  color: white;
  z-index: 1;
`;

const PrevButton = styled.button`
  width: 32px;
  height: 32px;
  margin: 10px;
  cursor: pointer;
  color: gray;
`;

const NextButton = styled.button`
  width: 32px;
  height: 32px;
  margin: 10px;
  cursor: pointer;
  color: gray;
  transform: rotate(180deg);
`;

const Content = styled.div`
  position: relative;
  background: white;
  border-radius: 8px;
  overflow: hidden;
`;

export default ModalLayer;
