import styled from "@emotion/styled";
import ContentHeader from "@/pages/Home/ContentHeader.tsx";
import PhotosList from "@/components/photos/PhotosList.tsx";
import { usePhotos } from "@/hooks/usePhotos.ts";
import { useToast } from "@/hooks/useToast.ts";

const Home = () => {
  const { data } = usePhotos();
  const { openToast } = useToast();

  // const nextFlow = () => {
  //   callEvent();
  //   next();
  // };
  // const { session } = useSession();
  //
  // const { data: marketing } = useAgreeMarketing();
  // const { refetch: callEvent } = useEventJoin();
  //
  // const handleEventJoin = async () => {
  //   // 로그인체크
  //   if (!session.memberNo) {
  //     // 로그인 처리
  //     // login()
  //     return;
  //   }
  //
  //   if (!marketing.isAgreeMarketing) {
  //     const ok = await openModal((resolve) => (
  //       <AgreeMarketing onConfirm={() => {
  //           nextFlow()
  //       }} />
  //     ));
  //
  //     if (!ok) return;
  //   }
  //
  // ================================================

  // nextFlow();
  // };

  return (
    <Container>
      <button
        onClick={() =>
          openToast({
            message: "토스트 입니다1",
            hasClose: true,
            duration: 10000,
          })
        }
      >
        참여하기
      </button>
      <ContentHeader
        title="Unsplash"
        desc={`The internet's source for visuals. \nPowered by creators everywhere.`}
      />
      <PhotosList data={data} />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  max-width: 1300px;
  height: 306px;
  margin-block: 56px;
`;

export default Home;
