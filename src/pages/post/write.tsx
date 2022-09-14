import styled from "styled-components";
import dynamic from "next/dynamic";
import { useState } from "react";

export default function PostWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const submit = () => {};

  return (
    <Container>
      <PostTitle
        value={title}
        onChange={onChangeTitle}
        placeholder="제목을 입력하세요."
      />
      <ToastEditor width="80%" onChange={setContent} />
      {/*   <button>취소</button>
      <button>미리보기</button> */}
      <button onClick={submit}>등록</button>
    </Container>
  );
}

// ToastEditor는 ssr을 지원하지 않기 때문에 dynamic import 해줘야함
const ToastEditor = dynamic(() => import("components/editor"), { ssr: false });

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const PostTitle = styled.input`
  width: 80%;
  height: 40px;
  border: none;
  border-bottom: 2px solid #e2e2e2;
  font-size: 17px;
`;
