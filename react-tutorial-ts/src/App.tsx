import React from "react";
import "./App.css";
import { Greet } from "./components/Greet";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
function App() {
  const personName = {
    first: "Bruce",
    last: "Wayne",
  };

  const nameList = [
    {
      first: "이",
      last: "소룡",
    },
    {
      first: "주",
      last: "성치",
    },
    {
      first: "손",
      last: "오공",
    },
  ];
  return (
    <div className="App">
      <Greet name={"와카와카"} meseageCount={20} isLoggedIn={true} />
      <Person name={personName}></Person>
      <PersonList name={nameList}></PersonList>
    </div>
  );
}

export default App;
