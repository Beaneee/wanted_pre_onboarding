import React, { useState } from "react";
import styled from "styled-components";

function ClickToEdit({input, setInput}) {
  const [isFocus, setIsFocus] = useState(false);
  const [updateInputs, setUpdateInputs] = useState(input);

  const onChange = (event) => {
    setUpdateInputs(event.target.value);
  }

  const onFocus = () => {
    setIsFocus(true);
  }

  const onUpdate = () => {
    setIsFocus(false);
    setInput(updateInputs)
  }

  return (
    <EditContainer>
        <EditInput
          type="text"
          value={updateInputs}
          onChange={onChange}
          onFocus={onFocus}
          onBlur={onUpdate}
          readOnly={!isFocus}
        />
    </EditContainer>
  );
}

export default ClickToEdit;

const EditContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
`;

const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const EditInput = styled.input`
  width: 150px;
  height: 30px;
  margin-left: 10px;
  text-align: center;
`;
