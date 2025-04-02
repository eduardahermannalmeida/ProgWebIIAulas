import "./styles.css";
import { PencilSimpleLine } from "@phosphor-icons/react";

export function Profile({ background, pfp, name, job }) {
  return (
    <div className="profile">
      <img src={background} alt="Plano de Fundo do Usuário" />
      <img src={pfp} alt="Foto de Perfil do Usuário" />
      <h1 className="name"> {name} </h1>
      <h2 className="job"> {job} </h2>
      <button type="button"> <PencilSimpleLine size={14.12} />Editar seu perfil </button>
    </div>
  );
}
