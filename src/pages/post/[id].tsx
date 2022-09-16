import styled from "styled-components";
import Link from "next/link";
import moment from "moment";
import useSWR from "swr";
import { useRouter } from "next/router";
import { fetcher } from "libs/service";
import { useEffect } from "react";

export default function PostDetail() {
  const router = useRouter();
  const { data: post, error } = useSWR(`/api/post/${router.query.id}`, fetcher);

  useEffect(() => {
    async function revalidate() {
      await fetch("/api/post/revalidate?secret=this_is_revalidate_token");
    }

    revalidate();
  }, [post]);

  if (error) return <div>failed to load</div>;
  if (!post) return <div>loading...</div>;

  return (
    <Container>
      <PostHeader>
        <div>
          <Link href="/post">
            <button>목록</button>
          </Link>
          <button>이전글</button>
          <button>다음글</button>
        </div>
        <div>
          <button>수정</button>
        </div>
      </PostHeader>

      <PostTitle>{post.title}</PostTitle>

      <WriterInfo>
        <div className="writer">{post.user.name}</div>
        <div>조회 {post.look}</div>
        <div>{moment(post.date).format("YY.MM.DD HH:mm:ss")}</div>
      </WriterInfo>

      <PostContent dangerouslySetInnerHTML={{ __html: post.content }} />
    </Container>
  );
}

const Container = styled.div`
  margin: 30px;
  padding: 19px 27px 30px 27px;
  border: 1px solid #efefef;
  border-radius: 2px;
`;
const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  padding-bottom: 10px;

  button {
    box-sizing: border-box;
    height: 35px;
    margin-left: 6px;
    padding: 6px 14px;
    border: 1px solid #e4e4e4;
    border-radius: 2px;
    background: #ffffff;
    color: #333;
    line-height: 20px;
    font-size: 13px;
    cursor: pointer;

    :first-child {
      margin: 0;
    }
  }
`;
const PostTitle = styled.div`
  margin-top: 20px;
  font-weight: 400;
  font-size: 20px;
  word-break: break-all;
`;
const WriterInfo = styled.div`
  display: flex;
  padding-top: 5px;
  font-weight: 500;
  font-size: 13px;
  color: #a1a1a1;

  div {
    margin-right: 10px;
  }
  .writer {
    color: #333;
  }
`;
const PostContent = styled.div`
  padding: 28px 0 10px;
  font-size: 14px;
  word-wrap: break-word;
`;
