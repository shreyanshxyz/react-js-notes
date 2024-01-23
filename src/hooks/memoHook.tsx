import React, { useMemo } from "react";

interface Props {
  data: number[];
}

const ExpensiveComponent: React.FC<Props> = ({ data }) => {
  // Calculate the sum of the array elements using useMemo
  const sum = useMemo(() => {
    console.log("Calculating sum...");
    return data.reduce((acc, curr) => acc + curr, 0);
  }, [data]); // Dependency array - recalculates only when 'data' changes

  return (
    <div>
      <p>Sum: {sum}</p>
    </div>
  );
};

export default ExpensiveComponent;
