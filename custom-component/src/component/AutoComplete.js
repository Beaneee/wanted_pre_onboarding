import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { IoMdClose } from "react-icons/io";

function AutoComplete() {
  const words = [
    "according",
    "account",
    "break",
    "budget",
    "catch",
    "chair",
    "director",
    "explain",
    "fire",
    "first",
    "generation",
    "happy",
    "husband",
    "international",
    "job",
    "leader",
    "know",
    "main",
    "nation",
    "official",
    "party",
    "prepare",
    "once",
    "question",
    "relationship",
    "serve",
    "table",
    "until",
    "value",
    "whether",
    "young",
    "size"
  ];

  const ref = useRef();
  const [search, setSearch] = useState([]);
  const [text, setText] = useState("");
  const [isInput, setIsInput] = useState(false);

  const onChangeInput = (event) => {
    setText(event.target.value);
    setIsInput(true);
  };

  const onClose = () => {
    setText("");
    setIsInput(false);
  };

  const onClickWord = (word) => {
    setText(word);
    setIsInput(false);
  }

  useEffect(() => {
    if (text) {
      let res = words.slice();
      res = words.sort().filter((word) => {
        return word.includes(text);
      });
      setSearch(res);
    } else{
      setSearch([]);
    }
  }, [text]);

  useEffect(() => {
    const checkClickOutSide = (e) => {
      if(isInput === true && ref.current && !ref.current.contains(e.target)) {
        setIsInput(false);
      }
    }
    document.addEventListener("click", checkClickOutSide)
    return () => {
      document.addEventListener("click", checkClickOutSide)
    }
  },[isInput]);

  return (
    <AutoContainer ref={ref}>
      <h2>AutoComplete</h2>
      <InputContainer>
        <SearchInput value={text} onChange={onChangeInput} isInput={isInput}/>
        <CloseButton onClick={() => onClose()} />
      </InputContainer>
      {search.length > 0 && isInput ? (
          <SearchListContainer>
            {search.map((item, index) => {
              return <SearchItems key={index} onClick={()=> onClickWord(item)}>{item}</SearchItems>;
            })}
          </SearchListContainer>
        ) : null}
    </AutoContainer>
  );
}

export default AutoComplete;

const AutoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  margin-bottom: 60px;
`;

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const SearchInput = styled.input`
  width: 700px;
  height: 50px;
  border: 1px solid #e0e0e0;
  border-radius: ${(props) => (props.isInput ? "15px 15px 0 0;" : "15px")};
  position: relative;
  padding: 0 10px;
  font-size: 18px;

  &:focus {
    outline: none;
    box-shadow: 0 20px 15px -15px #e1e1e1;
  }
`;

const CloseButton = styled(IoMdClose)`
  cursor: pointer;
  border-radius: 10px;
  color: black;
  margin-left: 5px;
  position: absolute;
  padding: 10px;
  border: none;
`;

const SearchListContainer = styled.div`
  width: 700px;
  background-color: #ffffff;
  margin: 0 auto;
  list-style-type: none;
  border: 1px solid #e0e0e0;
  border-radius: 0 0 15px 15px;
  box-shadow: 0 20px 15px -15px #e1e1e1;
  z-index: 5;
  padding: 0 10px;
`;

const SearchItems = styled.div`
    /* padding: 5px 0; */
    margin-bottom: 5px;
    width: 700px;
    &:hover {
        background-color: #EFEFEF;
    }
`;
