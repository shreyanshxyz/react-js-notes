import React from "react";
import "./style.css";

type ComponentLifecycleProps = {};

const ComponentLifecycle: React.FC<ComponentLifecycleProps> = () => {
  return (
    <div className="blog__container">
      <h1 className="blog__heading"> Component Lifecycle (Deprecated)</h1>
    </div>
  );
};
export default ComponentLifecycle;
