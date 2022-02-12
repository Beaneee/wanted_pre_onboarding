import React, { useState } from "react";
import styled from 'styled-components';
import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import AutoComplete from './component/AutoComplete';
import ClickToEdit from './component/ClickToEdit';

function App() {
  //ClickToEdit props
  const [name, setName] = useState("김코딩");
  const [age, setAge] = useState(20);

    return (
      <>
        <MainContainer>
          <Toggle />
          <Modal />
          <Tab />
          <Tag />
          <AutoComplete />
          <h2>ClickToEdit</h2>
          <EditWrapper>
            <span>이름</span>
            <ClickToEdit input={name} setInput={setName}/>
          </EditWrapper>  
          <EditWrapper>
            <span>나이</span>
            <ClickToEdit input={age} setInput={setAge}/>
          </EditWrapper>
          이름 {name} 나이 {age}
        </MainContainer>
      </>
    );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  height: 150vh;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const EditWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 10px;
`;