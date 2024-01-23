import React from "react";
import { useCounterReducer } from "../../hooks/counterReducer";

type HooksProps = {};

const Hooks: React.FC<HooksProps> = () => {
  const [state, dispatch] = useCounterReducer();
  return (
    <div className="blog__container">
      <h1 className="blog__heading">React Hooks</h1>
      <div className="blog__text">
        Hooks allow function components to have access to state and other React
        features. Hooks allow us to "hook" into React features such as state and
        lifecycle methods.
      </div>
      <h4 className="blog__subheading">useState</h4>
      <div className="blog__text">
        The useState hook is a fundamental hook in React that allows you to add
        and manage state in functional components. It enables you to store and
        update data that can change over time, making your components dynamic
        and interactive. Here's how to implement the useState hook,
        <ol>
          <li>
            First, you need to import the useState hook from the React library.
            You typically do this at the beginning of your functional component
            file.
          </li>
          <pre className="code__snippet">
            <code>{useStateSnippet1}</code>
          </pre>
          <li>
            To use the useState hook, you call it within your functional
            component and provide an initial value for your state variable. The
            useState function returns an array with two elements: the current
            state value and a function to update that value.
          </li>
          <pre className="code__snippet">
            <code>{useStateSnippet2}</code>
          </pre>
          <li>
            You can access the current state value in your component's JSX by
            simply using the state variable (count in this case).
          </li>
          <pre className="code__snippet">
            <code>{useStateSnippet3}</code>
          </pre>
          <li>
            To update the state, you call the state update function (setCount in
            this case) and provide the new value you want to set. This triggers
            a re-render of your component with the updated state value.
          </li>
          <pre className="code__snippet">
            <code>{useStateSnippet4}</code>
          </pre>
          <li>
            Here's a complete example of a functional component using the
            useState hook:
          </li>
          <pre className="code__snippet">
            <code>{useStateSnippet5}</code>
          </pre>
        </ol>
      </div>
      <h4 className="blog__subheading">useReducer</h4>
      <div className="blog__text">
        The useReducer hook is another important state management hook in React
        that allows you to manage more complex state logic in your functional
        components.
        <br /> It's particularly useful when you have state that depends on
        previous state or when you need to handle multiple actions that modify
        the state. Let's break down the useReducer hook step by step:
        <ol>
          <li>
            First, you need to import the useReducer hook from the React
            library. You typically do this at the beginning of your functional
            component file.
            <pre>
              <code>{useReducerSnippet1}</code>
            </pre>
          </li>
          <li>
            Define a TypeScript type ActionType representing the possible
            actions that can be dispatched: 'INCREMENT' or 'DECREMENT'.
            <pre>
              <code>{useReducerSnippet2}</code>
            </pre>
          </li>
          <li>
            Define TypeScript interfaces CounterState and CounterAction.
            CounterState represents the shape of the state with a single
            property count of type number. CounterAction represents the shape of
            actions with a single property type of type ActionType.
            <pre>
              <code>{useReducerSnippet3}</code>
            </pre>
          </li>
          <li>
            Define the initial state of the counter, with the count set to 2.
            <br />
            Define the reducer function counterReducer which takes the current
            state and an action, then returns a new state based on the action
            type. It handles 'INCREMENT' and 'DECREMENT' actions, updating the
            count accordingly. If an unknown action type is received, it returns
            the current state.
            <pre>
              <code>{useReducerSnippet4}</code>
            </pre>
          </li>
          <li>
            Export a custom hook useCounterReducer, which internally uses the
            useReducer hook, passing in the counterReducer and initialState. The
            hook returns an array containing the current state and the dispatch
            function.
            <pre>
              <code>{useReducerSnippet5}</code>
            </pre>
          </li>
          <li>
            Import React and the useCounterReducer hook from the previously
            created CounterReducer.tsx file.
            <pre>
              <code>{useReducerSnippet6}</code>
            </pre>
          </li>
          <li>
            In our functional component made using TypeScript, where we want to
            use the reducer, we use the useCounterReducer hook to get the
            current state and dispatch function.
            <pre>
              <code>{useReducerSnippet7}</code>
            </pre>
          </li>
          <li>
            Return JSX, displaying the current count, and two buttons that
            dispatch 'INCREMENT' and 'DECREMENT' actions when clicked.
            <pre>
              <code>{useReducerSnippet8}</code>
            </pre>
          </li>
        </ol>
        <h4>
          Here's a working example of the useReducer hook. Count is:{" "}
          {state.count}
        </h4>
        <div className="button__container">
          <button
            className="state__button increment"
            onClick={() => dispatch({ type: "INCREMENT" })}
          >
            Increment
          </button>
          <button
            className="state__button decrement"
            onClick={() => dispatch({ type: "DECREMENT" })}
          >
            Decrement
          </button>
        </div>
      </div>
      <h4 className="blog__subheading">useEffect</h4>
      <div className="blog__text"></div>
      <h4 className="blog__subheading">useRef</h4>
      <div className="blog__text"></div>
      <h4 className="blog__subheading">useContext</h4>
      <div className="blog__text"></div>
      <h4 className="blog__subheading">useMemo</h4>
      <div className="blog__text"></div>
    </div>
  );
};
export default Hooks;

const useReducerSnippet1 = `import React, { useReducer } from 'react';`;
const useReducerSnippet2 = `type ActionType = 'INCREMENT' | 'DECREMENT';`;
const useReducerSnippet3 = `// Define the state and action interfaces
interface CounterState {
  count: number;
}

interface CounterAction {
  type: ActionType;
}
`;
const useReducerSnippet4 = `// Define the initial state
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
};`;
const useReducerSnippet5 = `// Define the custom hook to use the reducer
export const useCounterReducer = () => {
  return useReducer(counterReducer, initialState);
};`;
const useReducerSnippet6 = `// app.tsx

import React from 'react';
import { useCounterReducer } from './CounterReducer';
`;
const useReducerSnippet7 = `const App: React.FC = () => {
  // Use the custom hook to get the state and dispatch function
  const [state, dispatch] = useCounterReducer();
`;
const useReducerSnippet8 = `  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>Decrement</button>
    </div>
  );
};
`;

const useStateSnippet1 = `import React, { useState } from 'react';`;
const useStateSnippet2 = `const [count, setCount] = useState(0);`;
const useStateSnippet3 = `return <p>Count: {count}</p>;`;
const useStateSnippet4 = `<button onClick={() => setCount(count + 1)}>Increment</button>`;
const useStateSnippet5 = `
import React, { useState } from 'react';

function Counter() {
  // Initialize the state variable 'count' with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to increment the count when the button is clicked
  const incrementCount = () => {
    setCount(count + 1); // Update the 'count' state
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={incrementCount}>Increment</button>
    </div>
  );
}

export default Counter;`;
