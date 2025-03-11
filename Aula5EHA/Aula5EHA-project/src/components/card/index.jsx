import "./styles.css";
import { BtnQuantity } from "../btnQuantity/";
import { BtnBuy } from "../btnBuy/";

export function CoffeeCard({ img, type, title, description, price }) {
  return (
    <div>
      <img src={img} alt="Foto do café" id="CoffeImage" />
      <div className="container">
        <h1 id="superelipse">{type}</h1>
        <h1 id="title"> {title} </h1>
        <p id="description"> {description} </p>
        <div className="purchaseArea">
          <p>
            <span id="cifrao">R$ </span>
            <strong id="price">{price}</strong>
          </p>
          <BtnQuantity />
          <BtnBuy />
        </div>
      </div>
    </div>
  );
}
