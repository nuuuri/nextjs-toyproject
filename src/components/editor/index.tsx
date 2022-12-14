import { useEffect, useRef } from "react";
import { Editor } from "@toast-ui/react-editor";
import "@toast-ui/editor/dist/toastui-editor.css";

export default function ToastEditor(props: {
  width: string;
  onChange: Function;
}) {
  const ref = useRef<Editor>(null);

  useEffect(() => {
    if (ref.current) {
      ref.current.getRootElement().style.width = props.width;
    }
  }, []);

  const handleChange = () => {
    if (ref.current) {
      const data = ref.current.getInstance().getHTML();
      props.onChange(data);
    }
  };

  return (
    <Editor
      ref={ref}
      initialValue=" "
      placeholder="내용을 입력하세요"
      previewStyle="vertical"
      height="600px"
      initialEditType="wysiwyg"
      useCommandShortcut={false}
      hideModeSwitch={true}
      language="ko-KR"
      onChange={handleChange}
    />
  );
}
