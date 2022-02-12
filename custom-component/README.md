# 원티드 프리온보딩
 프리온보딩 프론트엔드 코스 선발 과제
 
 ## Toggle
 
 toggle 상태를 관리하기 위해서 useState와 onClickToggle 이벤트 핸들링을 통해서 on/off 상태를 변화시켜 주었습니다.
 또한 styled-components에 props를 통해서 버튼 위치, 색상 변화등을 감지합니다.
 
 - Error Handling Log
 
 background color이 on/off에 따라서 ToggleButton과 함께 서서히 변화시켜줘야 한다는 부분에서 시간이 소요됐습니다.
 이를 해결하기 위해서 background-image의 linear-gradient를 props를 통해서 background-position값을 삼항연산자를 통해서 해결했습니다.
 
  ## Modal
  
  modal의 상태를 관리하기 위해서 useState와 onClickModal 이벤트 핸들링을 통해서 isOpen의 값을 변화시켜 주었습니다.
  또한 isOpen의 값이 true인 경우 React-icons의 close 아이콘을 이용해 마찬가지로 isOpen의 값을 false로 바꾸어 창을 닫을 수 있습니다.
  
 
 ## Tab

tapContent 객체를 생성하여 각각의 id 값의 name과 content를 넣어주었습니다. tapContent를 map 함수를 이용하여 key와 매칭하여 content를 나타내어 주었습니다.

- Error Handling Log

클릭된 tab의 색상을 변경시켜줘야 하는 부분에서 고민이 되었습니다. tapContent 객체의 isClick를 boolean 값으로 넣어주어, onClickTab 함수 실행 시 isClick 상태 값 변경을 통해서 background-color를 변경시켜 주려고 했습니다. 하지만 복잡하다 판단되어 currentTab와 key 값이 같은 경우 color 값을 props로 넘겨주어 해결하였습니다.
 
 ## Tag
 
 Tab 컴포넌트와 같이 map 함수를 이용하여 key 값에 맞는 tag를 출력합니다. onChangeInput 함수를 통해서 input의 value를 가져옵니다.  가져온 value를 onKeyPress 이벤트 함수를 통해 event.key가 Enter인 경우, tagArr에 불변성을 유지하며 추가합니다. tagArr의 요소를 삭제하기 위해서 filter함수를 사용했습니다. filter함수의 callback 매개변수는 element와 index를 받습니다. 이를 이용하여 tagArr의 id와 클릭된 TagWrapper key 값이 같지 않은 것을 반환합니다.
 
 - Error Handling Log

onChange, onKeyPress, remove 함수는 이전 프로젝트에서 구현해봤던 기능이라 수월하게 넘어갔습니다. 하지만, input태그는 자식요소를 가지지 못한다는 점 때문에 focus 시 border의 색상이 변경되는 점을 해결하지 못했고, TagWrapper를 삽입하는 UI 구현에 시간이 걸렸습니다. 하지만 TagWrapper에 태그를 삽입하는 구현은 요소를 영역 내에서 배치하는 flex-wrap를 사용하여 해결하였습니다. 

## AutoComplete

미리 담아놓은 words배열과 input의 value와 매칭되는 글자를 filter를 사용하여 추출합니다. 이때 useRef를 사용하여 인풋 밖에 클릭시 isInput의 상태를 변화시켜 searchList를 초기화하는 기능을 추가하였습니다.

- Error Handling Log

useCallBack을 통해서 필터함수를 구현하려 했지만 쉽지 않았습니다. 이와 비슷하게 useEffect의 deps를 추가해주어 text의 상태가 변화할때 마다 동작을 실행하는 방법으로 바꾸니 훨씬 수월하게 기능 구현을 할 수 있었습니다.




