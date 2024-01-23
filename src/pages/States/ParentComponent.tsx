import React, { useState } from "react";
import ChildComponent from "./ChildComponent";

type ParentComponentProps = {};

const ParentComponent: React.FC<ParentComponentProps> = () => {
  const stateSnippet = `import React, { useState } from 'react';

function Counter() {
  // Define a state variable called "count" with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to increase the count when a button is clicked
  const increment = () => {
    setCount(count + 1); // Update the "count" state
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
    </div>
  );
}`;

  const propsSnippet = `
import React from 'react';

function Greeting(props) {
  // Access the "name" prop and display it
  return <p>Hello, {props.name}!</p>;
}

function App() {
  return (
    <div>
      {/* Pass the "name" prop to the Greeting component */}
      <Greeting name="John" />
      <Greeting name="Alice" />
    </div>
  );
}`;
  const [counter, setCounter] = useState<number>(0);

  function updateCounter() {
    setCounter(counter + 1);
  }

  function downdateCounter() {
    setCounter(counter - 1);
  }

  function resetCounter() {
    setCounter(0);
  }
  return (
    <div className="blog__container">
      <h1 className="blog__heading">States & Props</h1>
      <ChildComponent
        counter={counter}
        addone={updateCounter}
        subone={downdateCounter}
        reset={resetCounter}
      />
      <hr />
      <h4 className="blog__subheading">States</h4>
      <div className="blog__text">
        State in React is like a memory that a component can use to remember
        information over time. It's data that a component can hold onto and
        change when needed.
      </div>
      <pre className="code__snippet">
        <code>{stateSnippet}</code>
      </pre>
      <hr />
      <h4 className="blog__subheading">Props</h4>
      <div className="blog__text">
        Props (short for properties) are a way to pass data from a parent
        component to a child component. They are like parameters that you send
        to a function, but in this case, you send them to a React component.
      </div>
      <div className="blog__text">
        Example:Imagine you have a parent component (app) that wants to pass a
        name to a child component (greeting) for displaying a greeting. Here's
        how you'd do it:
      </div>
      <pre className="code__snippet">
        <code>{propsSnippet}</code>
      </pre>
      <div className="blog__text">
        <ul>
          <li>
            <b>State is for a Component:</b> State is used to manage data within
            a single component. It's like a private memory for that component.
          </li>
          <li>
            <b>Props are for Communication:</b> Props are used for passing data
            from a parent component to a child component. They allow components
            to communicate with each other.
          </li>
          <li>
            <b>State Changes:</b> You can change the state within a component,
            and it triggers re-rendering of that component.
          </li>
          <li>
            <b>Props are Immutable:</b> Props are read-only within the child
            component. The child component cannot change its props; it can only
            use them to display data.
          </li>
        </ul>
      </div>
    </div>
  );
};
export default ParentComponent;
