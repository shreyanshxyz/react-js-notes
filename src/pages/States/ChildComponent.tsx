import React from "react";

type ChildComponentProps = {
  counter: number;
  addone: () => void;
  subone: () => void;
  reset: () => void;
};

const ChildComponent: React.FC<ChildComponentProps> = ({
  counter,
  addone,
  subone,
  reset,
}: ChildComponentProps) => {
  return (
    <div>
      <h4 className="blog__subheading">The Current Count is: {counter}</h4>
      <div className="button__container">
        <button className="state__button increment" onClick={addone}>
          Increment
        </button>
        <button className="state__button decrement" onClick={subone}>
          Decrement
        </button>
        <button className="state__button reset" onClick={reset}>
          Reset
        </button>
      </div>
    </div>
  );
};
export default ChildComponent;
