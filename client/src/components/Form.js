//onChange -> input 값을 입력하는 것
//onChange -> select 값을 바꿀 때

import { useState } from "react";

//사용할 때는 onChange={(e)=>e.target.value}
function Form() {
  const [handleData, setHandleData] = useState(null);
  return (
    <>
      <h3>{handleData}</h3>
      <input type="text" onChange={(e) => setHandleData(e.target.value)} />
    </>
  );
}

export default Form;
