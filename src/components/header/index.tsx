import Link from "next/link";
import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <Menu>
        <Link href="/">
          <a>홈</a>
        </Link>
        <Link href="/post">
          <a>게시판</a>
        </Link>
      </Menu>

      <div>
        <button>로그인</button>
        <button>회원가입</button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background: lightblue;
`;
const Menu = styled.div`
  a {
    margin: 10px;
    color: #fff;
    font-weight: 600;
  }
`;
