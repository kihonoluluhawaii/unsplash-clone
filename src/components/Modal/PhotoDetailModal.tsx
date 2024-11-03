import styled from "@emotion/styled";
import { IPhoto } from "@/models/photos.ts";

import { IconLeft, IconLike, IconPlus } from "@/components/Icons";
import { useModal } from "@/hooks/useModal.ts";
import FullScreenModal from "@/components/Modal/FullScreenModal.tsx";
import React from "react";

interface Props {
  item: IPhoto;
  onClose: (data?: unknown) => void;
}

const PhotoDetailModal = ({ item, onClose }: Props) => {
  const { openModal, closeModal } = useModal();
  const data = { isAgree: true };

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    onClose(data);
    // openModal(<FullScreenModal onClose={() => closeModal(data)} item={item} />);
  };

  return (
    <Container>
      <Header>
        <User>
          <img
            src={item.user.profile_image?.medium}
            alt={item.alt_description}
          />
          <UserInfo>
            <span>{item.user.name}</span>
            <p>{item.user.username}</p>
          </UserInfo>
        </User>
        <LikeAndAddContainer>
          <Like>
            <IconLike />
          </Like>
          <Add>
            <IconPlus />
          </Add>
          <Download>
            <IconLeft />
          </Download>
        </LikeAndAddContainer>
      </Header>
      <img
        src={item.urls.regular}
        alt={item.alt_description}
        onClick={handleImageClick}
      />
    </Container>
  );
};

const Container = styled.div`
  color: black;
  padding: 20px;
  height: 100%;

  > img {
    max-height: 760px;
    cursor: zoom-in;
  }
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-bottom: 20px;
  color: black;
`;

const User = styled.div`
  display: flex;
  gap: 10px;
  box-sizing: border-box;

  > img {
    width: 32px;
    border-radius: 100px;
  }
`;

const UserInfo = styled.div`
  font-weight: 500;

  span {
    font-size: 15px;

    color: black;
    line-height: 20px;
  }

  p {
    font-size: 12px;
    color: #767676;
  }
`;

const LikeAndAddContainer = styled.div`
  display: flex;
  gap: 10px;

  svg {
    width: 16px;
    color: #767676;
    &:hover {
      color: black;
      border-color: black;
    }
  }

  > button {
    padding: 6px 10px;
    border: 1px solid #ddd;
    border-radius: 4px;
    cursor: pointer;
    &:hover {
      color: black;
      border-color: black;
    }
  }
`;
const Like = styled.button``;
const Download = styled.button``;
const Add = styled.button``;

export default PhotoDetailModal;
