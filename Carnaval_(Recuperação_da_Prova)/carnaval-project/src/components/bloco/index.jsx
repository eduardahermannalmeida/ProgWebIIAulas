import { MapPin } from "lucide-react";
import "./styles.css";

export function Bloco({ image, name, description, location }) {
  return (
    <>
      <div>
        <img src={image} alt="Imagem de Capa do Bloco de Carnaval" />
        <h1> {name} </h1>
        <p> {description} </p>
        <p>
          <MapPin style={{ color: "var(--icon-color)" }} size={21} />
          {location}
        </p>
      </div>
    </>
  );
}
