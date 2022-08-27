import styled from "styled-components";

export default function Posts(props: { posts: any[] }) {
  const { posts } = props;

  return (
    <Container>
      <h1>게시판</h1>

      <PostList>
        <thead>
          <tr>
            <th className="td_number"></th>
            <th className="td_title t_c">제목</th>
            <th className="td_writer">글쓴이</th>
            <th className="td_date">작성일</th>
            <th className="td_look">조회</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id}>
              <td className="td_number">{post.id}</td>
              <td className="td_title">{post.title}</td>
              <td className="td_writer">{post.userId}</td>
              <td className="td_date">2022.01.01</td>
              <td className="td_look">0</td>
            </tr>
          ))}
        </tbody>
      </PostList>
    </Container>
  );
}

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();

  console.log(posts);

  return {
    props: { posts },
  };
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const PostList = styled.table`
  width: 80%;
  margin: 20px 0 50px;
  border-collapse: collapse;
  text-align: center;
  cursor: default;

  thead {
    border-top: 1px solid #bbb;
    border-bottom: 1px solid #e4e4e4;
    color: #333;

    th {
      padding: 7px 10px;
      font-size: 12px;
      font-weight: 500;
    }
  }

  td {
    padding: 9px 0 9px;
    font-size: 13px;
    font-weight: 500;
    line-height: 19px;
    border-bottom: 1px solid #f5f5f5;
    color: #666;
  }

  .td_title {
    text-align: left;
  }
  .td_writer {
    width: 200px;
    padding-left: 0;
    text-align: left;
  }
  .td_date {
    width: 66px;
  }
  .td_number,
  .td_look {
    width: 60px;
  }

  .t_c {
    text-align: center;
  }
`;
