import React, { useState } from "react";
import styled from "styled-components";

function Toggle() {
  //선택 여부 체크 state
  const [isChecked, setIsChecked] = useState(false);

  //선택 여부 체크 함수
  const onClickToggle = () => {
    setIsChecked(!isChecked);
  };

  return (
    <ToggleContainer>
        <h2>Toggle</h2>
      <ToggleWrapper isChecked={isChecked} onClick={onClickToggle}>
        <ToggleButton isChecked={isChecked}></ToggleButton>
      </ToggleWrapper>
      {isChecked ? <h4>Toggle Switch ON</h4> : <h4>Toggle Switch OFF</h4>}
    </ToggleContainer>
  );
}

export default Toggle;

const ToggleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ToggleWrapper = styled.div`
  width: 110px;
  height: 50px;
  /* display: flex; */
  /* align-items: center; */
  position: relative;
  border-radius: 50px;
  transition: all 0.3s linear;
  cursor: pointer;
  background-image: linear-gradient(
    to right,
    #4901ce,
    #4901ce 50%,
    #c5c5c5 50%,
    #c5c5c5
  );
  background-position: ${(props) =>
    props.isChecked ? "0 100%" : "100% 0"};;
  background-size: 200% 100%;
  margin-top: 30px;
`;

const ToggleButton = styled.div`
  content: "";
  position: absolute;
  top: 7px;
  left: ${(props) => (props.isChecked ? "calc(100% - 43px)" : "7px")};
  width: 35px;
  height: 35px;
  border-radius: 50px;
  transition: all 0.3s linear;
  background: #fff;
  box-shadow: 0 0 2px 0 rgba(10, 10, 10, 0.29);
`;
