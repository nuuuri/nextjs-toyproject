import styled from "styled-components";

export default function Header() {
  return (
    <Container>
      <div>
        <button>게시판</button>
      </div>
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
