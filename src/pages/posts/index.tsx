import styled from "styled-components";

export default function Posts() {
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
          <tr>
            <td className="td_number">3</td>
            <td className="td_title">test</td>
            <td className="td_writer">test</td>
            <td className="td_date">2022.01.10</td>
            <td className="td_look">1</td>
          </tr>
          <tr>
            <td className="td_number">2</td>
            <td className="td_title">test</td>
            <td className="td_writer">test</td>
            <td className="td_date">2022.01.03</td>
            <td className="td_look">4</td>
          </tr>
          <tr>
            <td className="td_number">1</td>
            <td className="td_title">test</td>
            <td className="td_writer">test</td>
            <td className="td_date">2022.01.01</td>
            <td className="td_look">2</td>
          </tr>
        </tbody>
      </PostList>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;
const PostList = styled.table`
  width: 80%;
  border-collapse: collapse;
  text-align: center;

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
