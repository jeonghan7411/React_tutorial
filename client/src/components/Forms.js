import { useState } from "react";

function Forms() {
  const [userid, setUserid] = useState("");
  const [subject, setSubject] = useState("");
  const [agree, setAgree] = useState(false);

  //submit 했을 때 실행하는 함수
  function handleData(e) {
    e.preventDefault();
    //버튼이나 a 태그는 기본적으로 누르면 다음 페이지로 이동
    //기본 동작을 중지
    // console.log(`${userid} : ${subject}:${agree}`);
    if (userid == "") {
      alert("아이디를 입력하세요.");
    }
  }
  return (
    //회원가입
    <>
      {/* input */}
      {/* select */}
      {/* checkboxr */}
      submit 버튼을 누르면 실행하는 함수는 form 안에 함수 이름만 사용
      <form method="post" onSubmit={handleData}>
        <div>
          {/* <h1>{userid}</h1>
          <h1>{subject}</h1>
          <h1>{agree}</h1> */}
          아이디 :
          <input type="text" onChange={(e) => setUserid(e.target.value)} />
        </div>
        <div>
          과목명 :
          <select onChange={(e) => setSubject(e.target.value)}>
            <option>Java</option>
            <option>SpringFramework</option>
            <option>ReactJS</option>
            <option>NodeJS</option>
          </select>
        </div>
        <div>
          <input type="checkbox" onChange={(e) => setAgree(e.target.checked)} />
          회원가입에 동의하시겠습니까?
        </div>
        <input type="submit" value="Register" />
      </form>
    </>
  );
}

export default Forms;
