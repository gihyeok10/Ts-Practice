import { useReducer } from "react";
type CounterState = {
  count: number;
};

type CounterAction = {
  type: string;
  payload: number;
};
const initialState = { count: 0 };

function reducer(state: CounterState, action: CounterAction) {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.payload };

    case "descrement":
      return { count: state.count - action.payload };
    default:
      return state;
  }
}

export const Counter = () => {
  const [state, disptch] = useReducer(reducer, initialState);
  return (
    <>
      Count:{state.count}
      <button onClick={() => disptch({ type: "increment", payload: 10 })}>
        Increment 10
      </button>
      <button onClick={() => disptch({ type: "decrement", payload: 10 })}>
        Decrement 10
      </button>
    </>
  );
};
