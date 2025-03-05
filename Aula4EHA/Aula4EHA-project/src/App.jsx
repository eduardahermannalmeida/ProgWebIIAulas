import { Card } from "./components/card";
import { Sign } from "./components/sign";
import "./index.css";

export function App() {
  return (
    <>
      <div className="body">
        <Sign title="MAIS VANTAJOSO" />
        <Card
          description="PARA VOCÊ DECOLAR"
          title="Ultimate"
          price="29,97"
          darkmode={true}
          items={[
            "Usuários ilimitados",
            "Suporte 24/7",
            "CSM Dedicado",
            "Treinamentos Avançados",
          ]}
        />

{/*           <Card
            description="PARA VOCÊ COMEÇAR"
            title="Essentials"
            price="19,97"
            darkmode={false}
            items={["Até 3 usuários", "Autoatendimento"]}
          /> */}

        {/*         <Card
          description="PARA SUA EMPRESA"
          title="Enterprise"
          darkmode={false}
          buttonText="Fale com a gente"
          cifrao=""
          period=""
          items={[
            "Plano customizado especialmente para a necessidade de seu negócio",
          ]}
        /> */}
      </div>
    </>
  );
}
