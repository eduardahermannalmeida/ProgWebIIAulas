import "./styles.css";
import { Button } from "../button/";
import { List } from "../list";

export function Card({ description, title, price, darkmode = false, items=[], buttonText="Assinar Agora", cifrao="R$ ", period="/mês"}) {
  return (
    <div className={`cardContainer ${darkmode ? "darkContainer" : ""}`}>
      <p id="label">{description}</p>

      <div className="titleAndPrice">
        <h1 id="plan"> {title} </h1>
        <p id="price">
          <span id="cifrao">{cifrao}</span>
          {price}
          <span id="period">{period}</span>
        </p>
      </div>

      <Button title={buttonText} />
      <hr />
      <List
        items={items}/>
    </div>
  );
}
