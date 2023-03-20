import * as React from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./modules/todo/actions";
import { useState, useCallback } from "react";

const Todo = () => {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();
  const updateTodo = useCallback(
    (todo: string) => dispatch(addTodo({ todo: todo })),
    [dispatch]
  );

  const Onchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    updateTodo(value);
    setValue("");
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <input type="text" value={value} onChange={Onchange} />
        <button type="submit">등록</button>
      </form>
    </>
  );
};

export default Todo;
