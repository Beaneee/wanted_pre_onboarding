import React, { useState } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

function Tag() {
  const [tag, setTag] = useState("");
  const [tagArr, setTagArr] = useState(["CodeStates", "JJang"]);

  const onChangeInput = (event) => {
    setTag(event.target.value);
  };

  const onKeyPress = (event) => {
    if (event.key === "Enter") {
      //불변성을 지켜야 한다.
      setTagArr([...tagArr, tag]);
      //input을 리셋
      setTag("");
    }
  };

  const removeTag = (index) => {
    setTagArr(tagArr.filter((value, id) => id !== index));
  };

  return (
    <>
      <h2>Tag</h2>
      <TagContainer>
        <TagForm>
          {tagArr.map((item, index) => {
            return (
              <TagWrapper key={index}>
                {item} <CloseButton onClick={() => removeTag(index)} />
              </TagWrapper>
            );
          })}
        </TagForm>
        <TagInput
          type="text"
          value={tag}
          onChange={onChangeInput}
          onKeyPress={onKeyPress}
          placeholder="Press enter to add tags"
        />
      </TagContainer>
    </>
  );
}

export default Tag;

const TagContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
`;

const TagForm = styled.form`
  padding: 10px;
  display: flex;
  align-items: center;
`;
const TagInput = styled.input`
  outline: none;
  padding: 10px;
  flex: 1;
  font-size: 18px;
  border: 0;

  //해결하지 못함.
  &:focus {
    outline: none;
    border-color: #4901ce;
  }
`;

const TagWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
  height: 30px;
  padding: 10px;
  background-color: #4901ce;
  border-radius: 10px;
  color: white;
  margin-left: 10px;
`;

const CloseButton = styled(IoMdClose)`
  cursor: pointer;
  background-color: white;
  border-radius: 10px;
  color: black;
  margin-left: 5px;
`;
