import "./styles.css";
import background from "../../assets/profile_background.png";
import pfp from "../../assets/leslie_icon.png"
import { PencilSimpleLine } from "@phosphor-icons/react";

export function Profile({ name, job }) {
  return (
    <div className="profile">
      <img className="bg" src={background} alt="Plano de Fundo do Usuário" />
      <img className="pfp" src={pfp} alt="Foto de Perfil do Usuário" />
      <h1 className="name"> {name} </h1>
      <h2 className="job"> {job} </h2>
      <hr/>
      <button className="btn" type="button"> <PencilSimpleLine size={14.12} />Editar seu perfil </button>
    </div>
  );
}
