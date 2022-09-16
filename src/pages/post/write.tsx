import styled from "styled-components";
import dynamic from "next/dynamic";
import { useState } from "react";
import { useRouter } from "next/router";

export default function PostWrite() {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  //
  const userId = 123;

  const onChangeTitle = (e: any) => {
    setTitle(e.target.value);
  };

  const submit = async () => {
    if (loading) return;

    const data = { userId, title, content };
    setLoading(true);

    await fetch("/api/post", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    }).then((res) => {
      setLoading(false);

      if (res.status === 200) {
        router.push("/post");
      }
    });
  };

  return (
    <Container>
      <PostTitle
        value={title}
        onChange={onChangeTitle}
        placeholder="제목을 입력하세요."
      />
      <ToastEditor width="80%" onChange={setContent} />

      <Footer>
        <div>
          <button onClick={() => router.push("/post")}>취소</button>
        </div>
        <div>
          <button>미리보기</button>
          <button className="btn_submit" onClick={submit}>
            등록
          </button>
        </div>
      </Footer>
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
  margin: 20px 0 5px 0;
  border: none;
  border-bottom: 2px solid #e2e2e2;
  color: #333333;
  font-size: 17px;
  :focus {
    outline: none;
  }
`;
const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin-top: 10px;

  .btn_submit {
    margin-left: 3px;
  }
`;
