import dynamic from "next/dynamic";
import { useState } from "react";

export default function PostWrite() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const submit = () => {};

  return (
    <div>
      <input placeholder="제목을 입력하세요." />
      <ToastEditor onChange={setContent} />
      <button onClick={submit}>등록</button>
    </div>
  );
}

// ToastEditor는 ssr을 지원하지 않기 때문에 dynamic import 해줘야함
const ToastEditor = dynamic(() => import("components/editor"), { ssr: false });
