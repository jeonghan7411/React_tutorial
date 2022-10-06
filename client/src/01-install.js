/*

1.nodejs 설치
2.vscode
3.Ctrl + ` : command
4.작업 : App.js, App.css
  - 모듈 : components
5.node_modules(프로그램) 삭제
  - 사용할 때는 npm i(package.json 있어야 설치)

-------------------------------------------------------------------------
Reactjs.org

React_tutorial
- server
- client

 - client > npx create-react-app .
 - code .

1. fontawesome, font : cdn
   > public - index.html

2. 로딩할 때 순서
   > index.html -> index.js -> App.js

3. 
   components(모듈)
   images

4. NodeJS <-axios(미들웨어) -> ReactJS
   3000                                  5000
npm i cors : 다른 포트번호를 사용할 때 보안 해제
(미들웨어)

Reactjs : 함수, 클래스
5. hook( use~ : useState, useEffect ) : 함수
   - 데이터 저장, 또는 관리
   - const [변수명, set변수명] = useState(초기값)
            사용할때   저장할때
     - import {useState} from "react";
6. 함수
    - 매개변수가 없을 때 onClick={함수명}
    - 매개변수가 있을 때 onClick={ ()=>함수명(값) }

7. input에 글자를 입력하는 event 처리	
    input 값을 저장하기 위해 useState로 저장 변수 생성 후
   <input type="text" onChange={ (e)=> set변수명(e.target.value) } />

*/