import { ShoppingCart } from "lucide-react";
import "./styles.css";

export function Card({ imgCoffee, tags, title, description }) {
  return (
    <div id="card">
      <img src={imgCoffee} alt="" className="coffeeImg" />

      <div id="tags">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>

      <h1>{title}</h1>

      <p className="description">{description} </p>

      <div id="details">
        <span>
          R$ <strong>9,90</strong>
        </span>

        <div className="quantityButtons">
          <button type="button">-</button>
          <p>1</p>
          <button type="button">+</button>
        </div>
        <button type="button" className="cartBtn">
          <ShoppingCart size={22} color="#F3F2F2" fill="#F3F2F2" />
        </button>
      </div>
    </div>
  );
}
