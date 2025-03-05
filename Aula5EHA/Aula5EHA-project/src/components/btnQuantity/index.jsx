import { useState } from "react";
import "./styles.css";

export function BtnQuantity() {
  const [count, setCount] = useState(0);

  return (
    <div class="btnQuantity">
      <button onClick={() => setCount(count - 1)}>-</button>
      <p> {count} </p>
      <button onClick={() => setCount(count + 1)}>+</button>
    </div>
  );
} 
