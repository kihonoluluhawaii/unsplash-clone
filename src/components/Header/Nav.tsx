import styled from "@emotion/styled";
import SubscribeButton from "@/components/Header/components/HeaderTop/SubscribeButton.tsx";
import SubmitImageButton from "@/components/Header/components/HeaderTop/SubmitImageButton.tsx";
import MyActivity from "@/components/Header/components/HeaderTop/DropDownMenu/MyActivity.tsx";
import MyInfo from "@/components/Header/components/HeaderTop/DropDownMenu/MyInfo.tsx";
import ConfigMenu from "@/components/Header/components/HeaderTop/DropDownMenu/ConfigMenu.tsx";

const Nav = () => {
  return (
    <Container>
      <SubscribeButton />
      <SubmitImageButton />
      <MyActivity />
      <MyInfo />
      <ConfigMenu />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

export default Nav;
