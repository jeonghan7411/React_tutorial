import { useState } from "react";

//Toggle 버튼
function App() {
  //true : 보여주기 , false : 숨기기 -> boolean 초기값 false
  //if는 삼항연산자로 표시
  const [isShow, setIsShow] = useState(false);

  return (
    <>
      <h1>{isShow ? "전체내용" : "줄여진 내용"}</h1>
      {/* <button onClick={() => setIsShow(false)}>Hide</button>
      <button onClick={() => setIsShow(true)}>Show</button> */}
      <a href="#" onClick={() => setIsShow(!isShow)}>
        {isShow ? "줄여보기" : "전체보기"}
      </a>
    </>
  );
}

export default App;
