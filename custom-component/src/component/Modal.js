import React, { useState } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

function Modal() {
  //클릭 여부 체크
  const [isOpen, setIsOpen] = useState(false);

  //클릭 여부 체크 함수
  const onClickModal = () => {
    setIsOpen(!isOpen);
  };

  return (
    <ModalContainer>
      <h2>Modal</h2>
      <ModalButton onClick={onClickModal}>Open Modal</ModalButton>
      {isOpen ? (
        <>
          <ModalOverlay></ModalOverlay>
          <ModalWrapper>
              <CloseButton onClick={onClickModal}></CloseButton>
              HELLO CODESTATES
          </ModalWrapper>
        </>
      ) : null}
    </ModalContainer>
  );
}

export default Modal;

const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`;

const ModalButton = styled.button`
  width: 130px;
  height: 65px;
  border-radius: 50px;
  border: none;
  background-color: #4901ce;
  color: white;
  margin-top: 30px;
  cursor: pointer;
`;

const ModalWrapper = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 320px;
  height: 100px;
  padding: 16px;
  background-color: white;
  border-radius: 10px;
  text-align: center;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const ModalOverlay = styled.div`
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: rgba(173, 173, 173, 0.6);
  z-index: 999;
`;

const CloseButton = styled(IoMdClose)`
    position: fixed;
    top: 10px;
    cursor: pointer;
`;