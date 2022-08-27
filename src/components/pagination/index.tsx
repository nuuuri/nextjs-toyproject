import styled from "styled-components";
import { useState } from "react";

type Props = {
  totalPage: number;
  currentPage: number;
  setCurrentPage: Function;
};

export default function Pagination({
  totalPage,
  currentPage,
  setCurrentPage,
}: Props) {
  const [offset, setOffset] = useState(0);
  const limit = 10;
  const total = Math.ceil(totalPage / limit);

  const onClickPrevPrevBtn = () => {
    setOffset(0);
    setCurrentPage(1);
  };

  const onClickPrevBtn = () => {
    if (offset > 0) {
      setOffset(offset - 1);
      setCurrentPage((offset - 1) * limit + 1);
    }
  };

  const onClickNextBtn = () => {
    if (offset < total - 1) {
      setOffset(offset + 1);
      setCurrentPage((offset + 1) * limit + 1);
    }
  };

  const onClickNextNextBtn = () => {
    setOffset(total - 1);
    setCurrentPage(totalPage);
  };

  return (
    <Container>
      <Button onClick={onClickPrevPrevBtn}>{"<<"}</Button>
      <Button onClick={onClickPrevBtn}>{"<"}</Button>

      {Array(totalPage)
        .slice(offset * limit, (offset + 1) * limit)
        .fill("")
        .map((_, i) => (
          <Button
            key={i}
            isCurrentPage={offset * limit + i + 1 === currentPage}
            onClick={() => setCurrentPage(offset * limit + i + 1)}
          >
            {offset * limit + i + 1}
          </Button>
        ))}

      <Button onClick={onClickNextBtn}>{">"}</Button>
      <Button onClick={onClickNextNextBtn}>{">>"}</Button>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
`;
const Button = styled.button<{ isCurrentPage?: boolean }>`
  width: 30px;
  height: 30px;
  border: 1px solid #e2e2e2;
  background: ${(props) => (props.isCurrentPage ? "#337ab7" : "#ffffff")};
  color: ${(props) => (props.isCurrentPage ? "#ffffff" : "#337ab7")};
  cursor: pointer;

  :first-child {
    border-radius: 5px 0 0 5px;
  }
  :last-child {
    border-radius: 0 5px 5px 0;
  }
`;
