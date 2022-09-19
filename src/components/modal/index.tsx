import styled from "styled-components";
import { ModalButtonData } from "./type";
import warningIcon from "/public/images/warning.svg";

interface ModalType {
  type: string;
  isOpen: boolean;
  closeFunc?: Function;
  nextFunc: Function;
  mainMessage: string;
  subMessage?: string;
}

export default function Modal(props: ModalType) {
  const { type, isOpen, closeFunc, nextFunc, mainMessage, subMessage } = props;
  return (
    <>
      {isOpen && (
        <Background>
          <Container>
            <WarningImage src={warningIcon} alt="warning icon" />
            <Popup>
              <MainMessage>{mainMessage}</MainMessage>
              <SubMessage>{subMessage}</SubMessage>
              <ModalButton
                type={type}
                closeFunc={closeFunc}
                nextFunc={nextFunc}
              />
            </Popup>
          </Container>
        </Background>
      )}
    </>
  );
}

const ModalButton = (props: {
  type: string;
  closeFunc: any;
  nextFunc: any;
}) => {
  const { type, closeFunc, nextFunc } = props;
  const {
    isOneButton,
    isRightPositive,
    leftBtnString,
    rightBtnString,
    oneBtnString,
  } = ModalButtonData[type];

  const CloseButton = (props: { children?: string }) => {
    return (
      <Button color="white" onClick={closeFunc}>
        {props.children}
      </Button>
    );
  };

  const NextButton = (props: { children?: string }) => {
    return <Button onClick={nextFunc}>{props.children}</Button>;
  };

  return (
    <ButtonContainer>
      {isOneButton ? (
        <NextButton>{oneBtnString}</NextButton>
      ) : isRightPositive ? (
        <>
          <CloseButton>{leftBtnString}</CloseButton>
          <NextButton>{rightBtnString}</NextButton>
        </>
      ) : (
        <>
          <NextButton>{leftBtnString}</NextButton>
          <CloseButton>{rightBtnString}</CloseButton>
        </>
      )}
    </ButtonContainer>
  );
};

const Background = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
  animation: message-bg-show 0.3s;

  @keyframes message-show {
    from {
      opacity: 0;
      margin-top: -50px;
    }
    to {
      opacity: 1;
      margin-top: 0;
    }
  }
  @keyframes message-bg-show {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
const Container = styled.div`
  position: relative;
  margin: 0 auto;
`;
const WarningImage = styled.img`
  position: absolute;
  width: 60px;
  margin: 0 150px;
  left: 0;
  top: -29px;
  animation: message-show 0.3s;
  z-index: 100;
`;
const Popup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 360px;
  margin: 0 auto;
  border-radius: 8px;
  background-color: #ffffff;
  box-shadow: 0 2px 10px 0 rgba(0, 0, 0, 0.2);
  animation: message-show 0.3s;
  overflow: hidden;
  cursor: default;
`;
const MainMessage = styled.div`
  margin: 56px 10px 10px 10px;
  text-align: center;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  color: #ff4841;
  letter-spacing: 0;
  word-break: break-all;
`;
const SubMessage = styled.div`
  margin: 0 10px;
  text-align: center;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #000000;
  letter-spacing: 0;
  word-break: break-all;
  white-space: pre-line; // 개행 문자 인식
`;
const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 10px 0;
`;
const Button = styled.div<{ color?: string }>`
  margin: 10px;
  width: 120px;
  height: 46px;
  text-align: center;
  border: ${(props) =>
    props.color === "white" ? "1px solid #afafb7" : "none"};
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 46px;
  background: ${(props) => (props.color === "white" ? "#fff" : "#000")};
  color: ${(props) => (props.color === "white" ? "#000" : "#fff")};
  cursor: pointer;
`;
