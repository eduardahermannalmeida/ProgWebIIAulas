import { Card } from "./components/card";
import { Sign } from "./components/sign";
import {List} from "./components/list";
import "./index.css";

export function App() {
  return (
    <>
    <div id="body">
        <Sign title="MAIS VANTAJOSO" />
        <Card
          description="PARA VOCÊ DECOLAR"
          title="Ultimate"
          price="29,97"
          darkmode
          
        />
        
                
        </div>
    </>
  );
}
