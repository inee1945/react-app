import { Children, useReducer, useState } from "react";
import "./App.css";

const counterReducer = (state, action) => {
  console.log("##########", state.count, action);
  switch (action) {
    case "inc":
      return { count: state.count + 1 };
    case "dic":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

export default function Counter() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button type="buton" onClick={() => dispatch("inc")}>
        증가
      </button>
      <button type="buton" onClick={() => dispatch("dic")}>
        감소
      </button>
    </div>
  );
}
