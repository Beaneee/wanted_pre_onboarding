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
  
 
 
 
 
