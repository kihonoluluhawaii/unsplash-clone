import styled from "@emotion/styled";
import { IPhoto } from "@/models/photos.ts";

import { IconLeft, IconLike, IconPlus } from "@/components/Icons";
import React from "react";
import Header from "@/components/PhotosModal/Header.tsx";
import ImageDetail from "@/components/PhotosModal/ImageDetail.tsx";

interface Props {
  item: IPhoto;
  onClose: (data?: unknown) => void;
}

const PhotoDetailModal = ({ item, onClose }: Props) => {
  const data = { isAgree: true };

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onClose(data);
    // openModal(<FullScreenModal onClose={() => closeModal(data)} item={item} />);
  };

  return (
    <Container className={"PhotoDetailModal"}>
      <Header item={item} />
      <ImageDetail viewUrl={item.urls.regular} originUrl={item.urls.full} />
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 20px;
  color: black;

  > img {
    max-height: 760px;
    cursor: zoom-in;
  }
`;

export default PhotoDetailModal;
