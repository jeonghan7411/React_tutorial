import { useState } from "react";
function Buttons() {
  const [region, setRegion] = useState("부산");
  const [counter, setCounter] = useState(0);
  function changeRegion() {
    setRegion("Seoul");
  }

  function add() {
    setCounter(counter + 1);
  }

  function sub() {
    setCounter(counter - 1);
  }
  return (
    <>
      {/* 버튼 누르면 글자 초기값을 바꾸는 event(hook : busan -> seoul) */}
      <p>{region}</p>
      <button onClick={changeRegion}>지역바꾸기</button>
      <p></p>
      <h2>Counter : {counter}</h2>
      <button onClick={add}>ADD</button>
      <button onClick={sub}>SUB</button>
    </>
  );
}

export default Buttons;
