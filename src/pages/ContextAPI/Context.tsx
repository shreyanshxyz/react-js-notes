import React from "react";
import "./style.css";
type ContextProps = {};

const Context: React.FC<ContextProps> = () => {
  return (
    <div className="blog__container">
      <h1 className="blog__heading">Context API</h1>
      <div className="blog__text">
        The Context API is a feature in React that provides a way to manage and
        share global state across your application without the need to pass
        props manually through multiple levels of components. It's a powerful
        tool for state management, especially when you have data that needs to
        be accessible by many components at different levels in your component
        tree.
      </div>
    </div>
  );
};
export default Context;
