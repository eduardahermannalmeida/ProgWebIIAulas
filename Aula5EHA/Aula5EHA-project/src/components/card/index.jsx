import "./styles.css";
import { BtnQuantity } from "../btnQuantity/";
import { BtnBuy } from "../btnBuy/";

export function CoffeeCard({
  img,
  type,
  title,
  description,
  price
}) {
  return (
    <div className="container">
      <img src={img} alt="Foto do café" id="CoffeImage" />
      <h1 id="superelipse">{type}</h1>
      <h1 id="title"> {title} </h1>
      <p id="description"> {description} </p>
      <div className="purchaseArea">
        <p id="price">
          <span>R$ </span><span id="price">{price}</span>
        </p>
        <BtnQuantity/>
        <BtnBuy/>
      </div>
    </div>
  );
}
