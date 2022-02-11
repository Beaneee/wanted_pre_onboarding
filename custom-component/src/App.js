import React from 'react';
import styled from 'styled-components';
import Toggle from './component/Toggle';
import Modal from './component/Modal';

function App() {

    return (
      <>
        <MainContainer>
          <Toggle />
          <Modal />
        </MainContainer>
      </>
    );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;