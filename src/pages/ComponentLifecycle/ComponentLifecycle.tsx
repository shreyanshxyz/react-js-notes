import React from "react";
import "./style.css";

type ComponentLifecycleProps = {};

const ComponentLifecycle: React.FC<ComponentLifecycleProps> = () => {
  return (
    <div className="blog__container">
      <h1 className="blog__heading"> Component Lifecycle (Deprecated)</h1>
      <h4 className="blog__subheading">Mounting</h4>
      <div className="blog__text">TBD</div>
    </div>
  );
};
export default ComponentLifecycle;
