import {createContext, ReactNode, useCallback, useContext, useState} from "react";
import cn from "classnames";
import {IconLeft, IconX} from "@/components/Icons";
import styled from "@emotion/styled";

interface IModalOptions {
  size?: string
}

interface IModal {
  el: ReactNode,
  options?: IModalOptions
}

interface IModalContext {
  modals: IModal[],
  openModal: (el: ReactNode, options?: IModalOptions) => void;
  closeModal: () => void;
}

export const ModalContext = createContext<IModalContext | null>(null)

interface Props {
  children: ReactNode
}

const ModalLayer = ({children}: Props) => {
  const [modals, setModals] = useState<IModal[]>([])

  const openModal = useCallback((el: ReactNode, options?: IModalOptions) => {
    setModals([
      ...modals,
      {
        el,
        options
      }
    ])
  }, [modals])

  const closeModal = useCallback(() => {
    const nextModals = [...modals]
    nextModals.pop()
    setModals(nextModals)
  }, [modals])

  return (
    <ModalContext.Provider value={{
      modals,
      openModal,
      closeModal
    }}>{children}

      {
        modals.map((modal) => (
          <Container className={cn("ModalContainer")} onClick={closeModal}>
            <Box>
              <IconX />
              <Overlay />
              <ControlBox>
                <PrevButton>
                  <IconLeft />
                </PrevButton>
                <Content>
                  {modal.el}
                </Content>
                <NextButton>
                  <IconLeft />
                </NextButton>
              </ControlBox>
            </Box>
          </Container>
        ))
      }
    </ModalContext.Provider>
  );
};

export const useModal = () => {

  const values = useContext(ModalContext)
  if(values === null) {
    throw new Error("useModal 은 ModalContext.Provider 내부에서 사용 가능합니다")
  }

  return values
}



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
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
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

export default ModalLayer
