import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import "./style.css";

export function Botoes({ val }) {
  const [count, setCount] = useState(0);

  return (
    <div id="details">

      <span> R$<strong>{val}</strong>
      </span>  

      <div className="quantityButtons">
        <button onClick={() => setCount(count - 1)}>
          -
        </button>
        <p>{count}</p>
        <button onClick={() => setCount(count + 1)}>
          +
        </button>
      </div>
      
      <button type="button" className="cardBtn">
        <ShoppingCart  color="#F3F2F2" fill="#F3F2F2" />
      </button>
    </div>
  );
}
