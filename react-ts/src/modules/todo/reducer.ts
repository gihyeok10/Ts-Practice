import { TodoAction, Todo } from "./types";
import { createReducer } from "typesafe-actions";
import { ADD_TODO, DELETE_TODO } from "./actions";
import produce from "immer";

const intitailState: Todo = {
  todo: [],
};

const todo = createReducer<Todo, TodoAction>(intitailState, {
  [ADD_TODO]: (state, action) =>
    produce(state, (draft) => {
      draft.todo.push(action.payload.todo);
    }),

  [DELETE_TODO]: (state, action) =>
    produce(state, (draft) => {
      draft.todo.pop();
    }),
});

export default todo;
