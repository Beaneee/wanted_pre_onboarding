import React, { useState } from "react";
import styled from "styled-components";

function Tab() {
  const tapContent = [
    {
      id: 0,
      name: "Tab1",
      content: "Tab menu ONE",
    },
    {
      id: 1,
      name: "Tab2",
      content: "Tab menu TWO",
    },
    {
      id: 2,
      name: "Tab3",
      content: "Tab menu THREE",
    },
  ];

  const [currentTab, setCurrentTab] = useState(0);

  const onClickTab = (index) => {
    setCurrentTab(index);
  };

  return (
    <>
      <h2>Tab</h2>
      <TapContainer>
        <TabMenu>
          {tapContent.map((item, index) => {
            return (
              <TabItem
                key={index}
                color={currentTab === index ? "#4901ce" : "#E0E0E0"}
                textColor={currentTab === index ? "#FDF4FE" : "#B2B2B2"}
                onClick={() => onClickTab(item.id)}
              >
                {item.name}
              </TabItem>
            );
          })}
        </TabMenu>
        {tapContent[currentTab].content}
      </TapContainer>
    </>
  );
}

export default Tab;

const TapContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: start;
  width: 1000px;
  height: 150px;
  border: 1px solid #e0e0e0;
  margin-bottom: 60px;
`;

const TabMenu = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: start;
  justify-content: center;
`;

const TabItem = styled.div`
  width: 1000px;
  height: 30px;
  background-color: ${(props) => props.color};
  cursor: pointer;
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 10px;
  transition: all 0.3s linear;
  color: ${(props) => props.textColor};;
`;
