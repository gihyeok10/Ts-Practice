import React from "react";
import "./App.css";
import { Button } from "./components/Button";
import { Greet } from "./components/Greet";
import { Heading } from "./components/Heading";
import { Input } from "./components/Input";
import { Oscar } from "./components/Oscar";
import { Person } from "./components/Person";
import { PersonList } from "./components/PersonList";
import { Status } from "./components/Status";
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
      <Status status="loading" />
      <Heading>PlaceHoleder Text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo Dicaprio</Heading>
      </Oscar>
      <Button
        handleClick={(evnet, id) => {
          console.log("Button Clicked", evnet, id);
        }}
      ></Button>
      <Input value="" handleChange={(event) => console.log(event)}></Input>
    </div>
  );
}

export default App;
