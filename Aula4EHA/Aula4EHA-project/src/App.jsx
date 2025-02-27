import "./interfaceStyle.css";
import { Card, Button, List } from "./components/card";

export function App() {
  return (
    <>
      <div class="miniContainer">
        <h1 id="superelipse"> MAIS VANTAJOSO </h1>
      </div>
      <div className="cardContainer">
        <Card description="PARA VOCÊ DECOLAR" title="Ultimate" price="29,97" />
        <Button title="Assinar agora" />
        <hr />
        <List
          item1="Usuários ilimitados"
          item2="Suporte 24/7"
          item3="CSM Dedicado"
          item4="Treinamentos"
        />
      </div>
    </>
  );
}
