import "./styles.css";
import { ShoppingCart, ShoppingCartIcon } from "lucide-react";

export function BtnBuy() {
  return (
    <button type="Button" id="btnBuy">
      <ShoppingCartIcon size={32} id="cartIcon"/>
    </button>
  );
}
