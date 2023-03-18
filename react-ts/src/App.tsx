import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
let 박스: JSX.Element = <div></div>;
// JSX HTML  요소 타입지정

// array 위치를 고려한 타입 지정

let 멍멍: [string, boolean?] = ["dog", true];
// ?옵션은 항상 맨 뒤에

function App() {
  let [user, setUser] = useState<string | number>("kim");
  // 제네릭으로 타입 지정.
  // usestate알아서 타입 지정 해준다.

  return (
    <div className="App">
      <h4>안녕하십니까</h4>
      <Profile name="철수" age="20"></Profile>
    </div>
  );
}

function Profile(props: { name: string; age: string }): JSX.Element {
  return <div>{props.name}입니다</div>;
}

// 컴포넌트 리턴 타입 설정

export default App;
