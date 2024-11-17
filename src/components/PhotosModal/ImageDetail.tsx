import styled from "@emotion/styled";
import { useState } from "react";
import cn from "classnames";
import { keyframes } from "@emotion/react";
import { IconX } from "@/components/Icons";

interface Props {
  viewUrl: string;
  originUrl: string;
}

const ImageDetail = ({ viewUrl, originUrl }: Props) => {
  const [origin, setOrigin] = useState(false);

  const openOriginImage = () => {
    setOrigin((v) => !v);
  };

  return (
    <Container>
      <ViewImage>
        <img src={viewUrl} alt={""} onClick={openOriginImage} />
      </ViewImage>
      <OriginImage
        className={cn({ isActive: origin })}
        onClick={openOriginImage}
      >
        <CloseButton>
          <IconX />
        </CloseButton>
        <img src={originUrl} alt="" />
      </OriginImage>
    </Container>
  );
};

const FadeIn = keyframes`
    0% {
        opacity: 0;
    }
    
    100% {
        opacity: 1;
    }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
`;

const ViewImage = styled.div``;

const OriginImage = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  overflow-y: auto;
  display: none;
  opacity: 0;
  background: rgba(0, 0, 0, 0.8);
  img {
    width: 100%;
  }

  &.isActive {
    animation: 0.3s ${FadeIn} forwards;
    display: flex;
    align-items: center;
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 0;
  right: 0;
  width: 24px;
  height: 24px;
  margin: 10px;
  color: white;
  cursor: pointer;
  z-index: 1;
  &:hover {
    color: #ddd;
  }
`;

export default ImageDetail;
