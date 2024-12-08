import styled from "@emotion/styled";
import { usePostNotice } from "@/pages/Notice/hooks/usePostNotice.ts";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

interface Inputs {
  title: string;
  content: string;
}

const NoticeAdd = () => {
  const navigate = useNavigate();
  const { addNotice } = usePostNotice();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm({
    defaultValues: {
      title: "",
      content: "",
    },
  });

  const onSubmit: SubmitHandler<Inputs> = async (data) => {
    const res = await addNotice(data);
    console.log("@@ res", res);
    navigate("/notice");
  };

  console.log("@@ errors", errors);

  return (
    <Container>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          {...register("title", {
            required: "필수 입력 사항입니다",
            validate: {
              isEmail: (v) => {
                console.log("@@ v", v);
                return true;
              },
            },
          })}
        />
        {errors.title?.message && <p>{errors.title.message}</p>}
        <textarea
          {...register("content", {
            required: "필수 입력 사항입니다",
          })}
        />
        {errors.content?.message && <p>{errors.content.message}</p>}
        <button>확인</button>
      </form>
    </Container>
  );
};

const Container = styled.div`
  max-width: 600px;
  margin: 0 auto;
  input {
    display: block;
    width: 100%;
    height: 40px;
    border: 1px solid #ddd;
    margin: 20px 0;
    padding: 8px;
  }
  textarea {
    display: block;
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
  }
`;

export default NoticeAdd;
