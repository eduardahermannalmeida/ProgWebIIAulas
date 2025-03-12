import { ShoppingCart, Timer, Package, Coffee } from "lucide-react";
import coffeeImg from "./assets/coffee.svg";
import { Header } from "./components/header";
import { Card } from "./components/card";

import data from "../data.json";

export function App() {
  return (
    <>
      <Header />
      <main>
        <div id="content">
          <h1>Encontre o café perfeito para qualquer hora do dia</h1>
          <p>
            Com o Coffee Delivery você recebe seu café onde estiver, a qualquer
            hora
          </p>

          <ul className="info-list">
            <li>
              <ShoppingCart
                className="icon yellow-dark"
                size={32}
                weight="fill"
              />
              <span>Compra simples e segura</span>
            </li>

            <li>
              <Package className="icon base-text" size={32} weight="fill" />
              <span>Embalagem mantém o café intacto</span>
            </li>

            <li>
              <Timer className="icon yellow" size={32} weight="fill" />
              <span>Entrega rápida e rastreada</span>
            </li>

            <li>
              <Coffee className="icon purple" size={32} weight="fill" />
              <span>O café chega fresquinho até você</span>
            </li>
          </ul>
        </div>
        <div>
          <img src={coffeeImg} alt="" />
        </div>
      </main>
      <section>
        <h2>Nossos cafés</h2>

        {/* COLOCAR A RENDERIZAÇÃO DOS CARDS AQUI */}
        <div className="grid">
          {data.coffees.map((coffee) => (
            <Card
              key={coffee.id}
              imgCoffee={coffee.image}
              tags={coffee.tags}
              title={coffee.title}
              description={coffee.description}
            />
          ))}
        </div>
      </section>
    </>
  );
}
