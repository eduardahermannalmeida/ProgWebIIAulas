import { CoffeeCard } from "./components/card";
import "./index.css";

/* img,
type,
title,
description,
price,
 */

export function App() {
  return (<CoffeeCard 
  img="src/components/img/CoffeeImg.png"
  type="TRADICIONAL"
  title="Expresso Tradicional"
  description="O tradicional café feito com água quente e grãos moídos"
  price="9,90"/>
  );
}
