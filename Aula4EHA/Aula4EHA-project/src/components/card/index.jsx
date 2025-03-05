import "./styles.css";
import { Button } from "../button/";
import { List } from "../list";

export function Card({ description, title, price, darkmode = false}) {
  return (
    <div className={`cardContainer ${darkmode ? "darkContainer" : ""}`}>
      <p id="label">{description}</p>

      <div className="titleAndPrice">
        <h1 id="plan"> {title} </h1>
        <p id="price">
          <span id="cifrao">R$ </span>
          {price}
          <span id="period">/mês</span>
        </p>
      </div>

      <Button title="Assinar agora" />
      <hr />
      <List
        item1="Usuários ilimitados"
        item2="Suporte 24/7"
        item3="CSM Dedicado"
        item4="Treinamentos" />
    </div>
  );
}
