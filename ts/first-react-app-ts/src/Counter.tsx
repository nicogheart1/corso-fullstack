import { useState } from "react";

interface CounterProps {
  initialValue?: number;
}

const Counter = (props: CounterProps) => {
  const { initialValue = 0 } = props;

  const [count, setCount] = useState(initialValue);
  return (
    <div>
      {count}
      <div>
        <button onClick={() => setCount(count + 1)}>Increase {count}</button>
      </div>
    </div>
  );
};

export default Counter;
