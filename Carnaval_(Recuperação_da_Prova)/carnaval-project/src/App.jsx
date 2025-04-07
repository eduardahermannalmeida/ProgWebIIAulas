import { Header } from "./components/header";
import { Bloco } from "./components/bloco";
import data from '../data.json';

export function App() {
  return (
    <>
      <Header />

      <div className="recomended">
        <h1> Blocos recomendados </h1>
        <div className="btns">
          <button id="list-btn" type="button"> Lista </button>
          <button id="map-btn" type="button"> Mapa </button>
        </div>
      </div>

      <div className="grid">
        {data.blocos.map((bloco) => (
      <Bloco 
      key={bloco.id}
      image={bloco.image}
      name={bloco.name}
      description={bloco.description}
      location={bloco.location}
      />
        ))}
      </div>
    </>
  );
}
