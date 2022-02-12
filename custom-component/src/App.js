import React from 'react';
import styled from 'styled-components';
import Toggle from './component/Toggle';
import Modal from './component/Modal';
import Tab from './component/Tab';
import Tag from './component/Tag';
import AutoComplete from './component/AutoComplete';

function App() {

    return (
      <>
        <MainContainer>
          <Toggle />
          <Modal />
          <Tab />
          <Tag />
          <AutoComplete />
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