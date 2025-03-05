import "./styles.css";
import { ShoppingCart } from "lucide-react";

export function BtnBuy() {
  return (
    <button type="Button" id="btnBuy">
      <ShoppingCart size={32} id="cartIcon"/>
    </button>
  );
}
