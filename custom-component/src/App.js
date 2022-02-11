import React from 'react';
import styled from 'styled-components';
import Toggle from './component/Toggle';

function App() {

    return (
      <>
        <MainContainer>
          <Toggle />
        </MainContainer>
      </>
    );
}

export default App;

const MainContainer = styled.div`
  width: 100%;
  height: 100vh;
  position: absolute;
  top: 0px;
  left: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;