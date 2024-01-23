import React, { useRef, useState } from "react";

import { useCounterReducer } from "../../hooks/counterReducer";
import axios from "axios";
import { Link } from "react-router-dom";
import ExpensiveComponent from "../../hooks/memoHook";

type HooksProps = {};

type catFact = {
  fact: string;
};

const Hooks: React.FC<HooksProps> = () => {
  const [state, dispatch] = useCounterReducer();
  const [catFact, setCatFact] = useState<catFact | null>(null);
  const [numbers, setNumbers] = useState([1, 2, 3, 4, 5]);

  async function getViaAxios() {
    const res = await axios.get("https://catfact.ninja/fact");
    const data = res.data;
    setCatFact(data);
  }

  const inputRef = useRef<HTMLInputElement>(null);

  const handleButtonClick = () => {
    inputRef.current!.focus(); // Focuses the input element
  };

  const renderCount = useRef(0);

  // This does not trigger a re-render when the value changes
  renderCount.current++;

  const timerId = useRef<number>(0);

  const startTimer = () => {
    timerId.current = setInterval(() => {
      console.log("Timer tick");
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
  };

  return (
    <div className="blog__container">
      <h1 className="blog__heading">React Hooks</h1>
      <div className="blog__text">
        Hooks allow function components to have access to state and other React
        features. Hooks allow us to "hook" into React features such as state and
        lifecycle methods.
      </div>
      <hr />
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
      <hr />
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
      <hr />
      <h4 className="blog__subheading">useEffect</h4>
      <div className="blog__text">
        The useEffect hook is a crucial part of React that allows you to perform
        side effects in functional components. Side effects can include data
        fetching, DOM manipulation, and more. Here's a detailed explanation of
        the useEffect hook for someone new to React:
        <ol>
          <li>
            First, you need to import the useEffect hook from the React library.
            You typically do this at the beginning of your functional component
            file:
            <pre className="code__snippet">
              <code>{useEffectSnippet1}</code>
            </pre>
          </li>
          <li>
            Side effects in React are operations that occur after the initial
            rendering of your component. These operations might include fetching
            data from an API, interacting with the browser's DOM, setting
            timers, or subscribing to external data sources.
            <br />
            The useEffect hook allows you to execute side effects in functional
            components. You place it inside your component, and it takes two
            arguments: a function (the effect) and an optional array of
            dependencies.
            <br />
            The second argument is an array of dependencies. It tells React when
            the effect should run. If the array is empty <code>([])</code>, the
            effect runs after every render. If you include dependencies, it runs
            when any of the dependencies change.
            <pre className="code__snippet">
              <code>{useEffectSnippet2}</code>
            </pre>
          </li>
          <li>
            Here's an example of using useEffect to fetch data from an API when
            a component mounts:
            <pre className="code__snippet">
              <code>{useEffectSnippet3}</code>
            </pre>
          </li>
          <li>
            You can also return a cleanup function from the effect. This
            function will be executed when the component unmounts or when the
            dependencies change before the effect runs again.
            <pre className="code__snippet">
              <code>{useEffectSnippet4}</code>
            </pre>
          </li>
        </ol>
        <h4>
          Here's a working example of the useEffect hook. <br />
          Cat Fact for Today is:{" "}
          <i>
            {catFact
              ? catFact.fact
              : "Click the button below to get the fact.."}
          </i>
        </h4>
        <div className="button__container">
          <button className="state__button reset" onClick={getViaAxios}>
            Get
          </button>
        </div>
      </div>
      <hr />
      <h4 className="blog__subheading">useRef</h4>
      <div className="blog__text">
        The useRef hook in React is a powerful tool that allows you to access
        and interact with DOM elements and persist values across renders without
        causing re-renders. It is especially useful for accessing DOM nodes,
        managing focus, and storing mutable values.
        <ol>
          <li>
            First, you need to import the useRef hook from the React library.
            You typically do this at the beginning of your functional component
            file:
            <pre className="code__snippet">
              <code>{useRefSnippet1}</code>
            </pre>
          </li>
          <li>
            You can create a ref by calling the <code>useRef()</code> function.
            The useRef hook returns a mutable ref object, which has a .current
            property. You can assign any value to .current and it will persist
            across renders.
            <pre className="code__snippet">
              <code>{useRefSnippet2}</code>
            </pre>
          </li>
          <li>
            One of the primary use cases of useRef is to access and interact
            with DOM elements. You can attach a ref to a DOM element by passing
            the ref attribute to the JSX element.
            <br />
            In this example, inputRef is attached to the input element. When the
            button is clicked, the input element receives focus.
            <pre className="code__snippet">
              <code>{useRefSnippet3}</code>
            </pre>
          </li>
          <li>
            Ref values persist across renders. Unlike state variables, changing
            the ref value doesn't trigger a re-render of the component.
            <br />
            In this example, renderCount is a ref object used to keep track of
            how many times the component renders. The component doesn't
            re-render when renderCount.current changes.
            <pre className="code__snippet">
              <code>{useRefSnippet4}</code>
            </pre>
          </li>
          <li>
            You can use useRef to store mutable values that don't trigger
            re-renders when they change. For example, you can store a function
            or an object that persists across renders.
            <br />
            In this example, timerId is a ref used to store the ID returned by
            setInterval, allowing you to clear the interval later.
            <pre className="code__snippet">
              <code>{useRefSnippet5}</code>
            </pre>
          </li>
        </ol>
        <div>
          <h4>Here's an example of the inputRef</h4>
          <input
            style={{ height: "20px", marginRight: "5px" }}
            ref={inputRef}
            type="text"
          />
          <button onClick={handleButtonClick} className="state__button reset">
            Focus Input
          </button>
        </div>
        <div>
          <h4>Here's an example of the persisting value through re renders</h4>
          <p>Component rendered {renderCount.current} times.</p>
        </div>
        <div>
          <h4>
            Here's an example of the Storing Mutable Values (Check Console)
          </h4>
          <button className="state__button increment" onClick={startTimer}>
            Start Timer
          </button>
          <button className="state__button decrement" onClick={stopTimer}>
            Stop Timer
          </button>
        </div>
      </div>
      <hr />
      <h4 className="blog__subheading">useContext</h4>
      <div className="blog__text">
        The useContext hook in React is a way to access and use context values
        in functional components. Context is a mechanism for sharing data, like
        a global state, between components without having to pass props through
        the component tree manually.
        <br />
        <b>We have already implemented useContext in the Dark/Light Mode</b>
        <p>
          You can check it out here:{" "}
          <Link
            to={"/context"}
            style={{
              all: "unset",
              cursor: "pointer",
              fontWeight: 800,
              textDecoration: "underline",
              textUnderlineOffset: "3px",
            }}
          >
            React Context API
          </Link>
        </p>
      </div>
      <hr />
      <h4 className="blog__subheading">useMemo</h4>
      <div className="blog__text">
        The main idea behind using useMemo in this example is to optimize
        performance. Calculating the sum of an array is an example of an
        expensive computation. By using useMemo, you ensure that the sum is only
        recalculated when the data (in this case, numbers) changes, preventing
        unnecessary calculations and improving the component's performance.
        <ol>
          <li>
            Import Statements: Import the necessary modules from React. useState
            is a hook for managing state, and useMemo is a hook for memoization.
            <pre className="code__snippet">
              <code>{useMemoSnippet1}</code>
            </pre>
          </li>
          <li>
            Interface Definition: Define an interface named Props that specifies
            the expected properties for the ExpensiveComponent. In this case, it
            expects a prop named data which should be an array of numbers.
            <pre className="code__snippet">
              <code>{useMemoSnippet2}</code>
            </pre>
          </li>
          <li>
            Component Definition: Define a functional component named
            ExpensiveComponent that takes the Props interface as its generic
            type. It receives the data prop destructured from its props.
            <pre className="code__snippet">
              <code>{useMemoSnippet3}</code>
            </pre>
          </li>
          <li>
            useMemo Hook: This is the heart of the example. The useMemo hook is
            used to memoize the result of a computation. In this case, it
            calculates the sum of the numbers in the data array.
            <ul>
              <li>
                The first argument to useMemo is a function that performs the
                expensive computation (in this case, the sum calculation).
              </li>
              <li>
                The second argument is an array of dependencies. The memoized
                value (sum) will only be recalculated when one of the
                dependencies in this array changes. In this case, it's [data],
                so if the data array changes, the sum will be recalculated.
              </li>
              <li>
                The console.log('Calculating sum...') is included to demonstrate
                that the sum calculation only happens when the data changes.
              </li>
            </ul>
            <pre className="code__snippet">
              <code>{useMemoSnippet4}</code>
            </pre>
          </li>
          <li>
            Component Rendering: The ExpensiveComponent renders a simple div
            containing a paragraph <code>p</code> that displays the calculated
            sum.
            <pre className="code__snippet">
              <code>{useMemoSnippet5}</code>
            </pre>
          </li>
          <li>
            App Component: Define another functional component named App. Inside
            it, use the useState hook to initialize a state variable numbers
            with an array of numbers, and setNumbers as the function to update
            this state.
            <pre className="code__snippet">
              <code>{useMemoSnippet6}</code>
            </pre>
          </li>
        </ol>
        <div className="blog__text">
          <h4 className="blog__subheading">
            Here's the above example in the code form:
          </h4>
          <ExpensiveComponent data={numbers} />
          <button
            className="state__button reset"
            onClick={() =>
              setNumbers([
                ...numbers,
                Math.floor(Math.random() * (2000 - 100) + 100),
              ])
            }
          >
            Add Number
          </button>
        </div>
        <hr />
      </div>
    </div>
  );
};
export default Hooks;

const useMemoSnippet1 = `import React, { useState, useMemo } from 'react';`;
const useMemoSnippet2 = `interface Props {
  data: number[];
}`;
const useMemoSnippet3 = `const ExpensiveComponent: React.FC<Props> = ({ data }) => {
`;
const useMemoSnippet4 = `  const sum = useMemo(() => {
    console.log('Calculating sum...');
    return data.reduce((acc, curr) => acc + curr, 0);
  }, [data]);`;
const useMemoSnippet5 = `  return (
    <div>
      <p>Sum: {sum}</p>
    </div>
  );
};`;
const useMemoSnippet6 = `  return (
    <div>
      <ExpensiveComponent data={numbers} />
      <button onClick={() => setNumbers([...numbers, Math.random()])}>
        Add Number
      </button>
    </div>
  );
};`;

const useRefSnippet1 = `import React, { useRef } from 'react';`;
const useRefSnippet2 = `const myRef = useRef(initialValue);`;
const useRefSnippet3 = `function MyComponent() {
  const inputRef = useRef(null);

  const handleButtonClick = () => {
    inputRef.current.focus(); // Focuses the input element
  };

  return (
    <div>
      <input ref={inputRef} type="text" />
      <button onClick={handleButtonClick}>Focus Input</button>
    </div>
  );
}`;
const useRefSnippet4 = `function MyComponent() {
  const renderCount = useRef(0);

  // This does not trigger a re-render when the value changes
  renderCount.current++;

  return <p>Component rendered {renderCount.current} times.</p>;
}`;
const useRefSnippet5 = `function MyComponent() {
  const timerId = useRef(null);

  const startTimer = () => {
    timerId.current = setInterval(() => {
      console.log('Timer tick');
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId.current);
  };

  return (
    <div>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}`;

const useEffectSnippet1 = `import React, { useEffect } from 'react';`;
const useEffectSnippet2 = `useEffect(() => {
  // Side effect code goes here
}, [dependencies]);`;
const useEffectSnippet3 = `  const [catFact, setCatFact] = useState<catFact | null>(null);

  async function getViaAxios() {
    const res = await axios.get("https://catfact.ninja/fact");
    const data = res.data;
    setCatFact(data);
  }

  useEffect(() => {
    getViaAxios();
  }, []);`;
const useEffectSnippet4 = `useEffect(() => {
  // Side effect code goes here

  // Cleanup function (optional)
  return () => {
    // Code to clean up side effects (e.g., unsubscribe from a subscription)
  };
}, [dependencies]);`;

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
