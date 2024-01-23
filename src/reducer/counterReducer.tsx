// CounterReducer.tsx

import { useReducer } from "react";

// Define the action types
type ActionType = "INCREMENT" | "DECREMENT";

// Define the state and action interfaces
interface CounterState {
  count: number;
}

interface CounterAction {
  type: ActionType;
}

// Define the initial state
const initialState: CounterState = {
  count: 2,
};

// Define the reducer function
const counterReducer = (
  state: CounterState,
  action: CounterAction
): CounterState => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count * 2 };
    case "DECREMENT":
      return { count: state.count / 2 };
    default:
      return state;
  }
};

// Define the custom hook to use the reducer
export const useCounterReducer = () => {
  return useReducer(counterReducer, initialState);
};
