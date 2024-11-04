import { useState } from "react";

interface CounterProps {
  initialValue: number;
}

const Counter = (props: CounterProps) => {
  const { initialValue } = props;

  const [count, setCount] = useState(initialValue);
  return (
    <div>
      {count}
      <div>
        <button onClick={() => setCount(1)}>Increase</button>
      </div>
    </div>
  );
};

export default Counter;
