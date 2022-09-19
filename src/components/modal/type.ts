export interface ModalType {
  type: string;
  isOpen: boolean;
  callbackFunc?: any;
  mainMessage?: string;
  subMessage?: string;
  closeButton?: boolean;
}

export interface ButtonType {
  isOneButton?: boolean;
  isRightPositive?: boolean;
  leftBtnString?: string;
  rightBtnString?: string;
  oneBtnString?: string;
}

export const ModalButtonData: { [key: string]: ButtonType } = {
  submit: {
    leftBtnString: "확인",
    rightBtnString: "취소",
  },
  stop: {
    isRightPositive: true,
    leftBtnString: "아니요",
    rightBtnString: "그만할래요",
  },
  delete: {
    leftBtnString: "삭제",
    rightBtnString: "아니요",
  },
  okay: {
    leftBtnString: "확인",
    rightBtnString: "아니요",
  },
  signout: {
    leftBtnString: "탈퇴 요청",
    rightBtnString: "아니요",
  },
  complete: {
    isOneButton: true,
    oneBtnString: "확인",
  },
};
