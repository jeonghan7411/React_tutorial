import { useState } from "react";

function Login() {
  const [userid, setUserid] = useState("");
  const [passwd, setPasswd] = useState("");

  //false 예회사항이 x, true는 입력값에 예외사항이 생겼을 때
  const [useridError, setUseridError] = useState(false);
  const [paswwdError, setPaswwdError] = useState(false);

  function useridHandler(e) {
    if (e.target.value.length < 10) {
      setUseridError(true);
      //setUserid("");
    } else {
      setUseridError(false);
      setUserid(e.target.value); //예외없이 정상적으로 입력했다면 변수에 저장
    }
  }

  function passwdHandler(e) {
    if (e.target.value.length < 12) {
      setPaswwdError(true);
      //setPasswd("");
    } else {
      setPaswwdError(false);
      setPasswd(e.target.value);
    }
  }

  function loginHandler(e) {
    e.preventDefault();
    if (userid == "" || passwd == "") {
      alert("아이디와 비밀번호를 확인하세요.");
    } else {
      alert("로그인을 진행합니다.");
    }
  }
  return (
    <>
      <form method="post" onSubmit={loginHandler}>
        <div>
          아이디 : <input type="text" onChange={useridHandler} />
          <span>{useridError ? "아이디 길이가 유효하지 않습니다." : ""}</span>
        </div>
        <div>
          비밀번호 : <input type="text" onChange={passwdHandler} />
          <span>{paswwdError ? "사용할 수 없는 비밀번호입니다." : ""}</span>
        </div>
        <div>
          <input type="submit" value="Login" />
        </div>
      </form>
    </>
  );
}

export default Login;
