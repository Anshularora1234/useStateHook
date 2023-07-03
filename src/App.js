import "./styles.css";
import { useState } from "react";
//here we will implement useState with  best practises
export default function App() {
  //we are passing initial argurment in useState hook in this was to prevent rerendering
  const [count, setCount] = useState(() => {
    return 0;
  });
  return (
    <div className="App">
      <button
        onClick={() => {
          //use of prevCount is good we need to use a callback
          setCount((prevCount) => {
            return prevCount + 1;
          });
        }}
      >
        Increment
      </button>
      <span>Hi the count is {count}</span>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
    </div>
  );
}
