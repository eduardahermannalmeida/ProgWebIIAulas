import "./styles.css";
import { Search, MapPin } from "lucide-react";

export function Header() {
  return (
    <>
    <div className="header"> 
      <div className="title-area">
        <p> FIND YOUR BLOCK </p>
        <h1> Encontre os melhores blocos de carnaval de 2023 </h1>
      </div>

      <div className="search-area">
        <Search style={{ color: 'var(--icon-color)' }} size={21}/>
        <div className="search">
          <Search />
          <input type="text" placeholder="Pesquisar por nome" />
        </div>

        <div className="select">
          <MapPin style={{ color: 'var(--icon-color)' }} size={21}/>
          <select defaultValue="">
            <option value="" disabled>
              Selecione uma cidade
            </option>
            <option> São Paulo - SP </option>
            <option> Florianópolis - SC </option>
            <option> Curitiba - PR </option>
            <option> Salvador - BA </option>
            <option> Rio de Janeiro - RJ </option>
            <option> Porto Alegre - RS</option>
          </select>
        </div>

        <button type="button"> BUSCAR AGORA </button>
      </div>
    </div>
    </>
  );
}
