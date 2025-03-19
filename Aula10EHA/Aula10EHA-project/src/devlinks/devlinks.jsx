import "./styles.css";
import profileImg from "../images/profilepic.jpg";
import { Github, Youtube, Instagram, Linkedin } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export function DevLinks() {
  const { toggleTheme } = useTheme();
  return (
    <div className="container">
      <div className="userInfo">
        <img
          src={profileImg}
          alt="Foto de Perfil"
          height="112px"
          width="112px"
          id="pfpIcon"
        />
        <p> @maykbrito </p>
      </div>

      <label class="switch">
        <input type="checkbox" onClick={() => toggleTheme()} />
        <span class="slider round"></span>
      </label>

      <div className="linkBtns">
        <button type="button"> Inscreva-se no NLW </button>
        <button type="button"> Baixe meu e-book </button>
        <button type="button"> Veja meu portfólio </button>
        <button type="button"> Conheça o Explorer </button>
      </div>

      <div className="socials">
        <Github />
        <Instagram />
        <Youtube />
        <Linkedin />
      </div>
    </div>
  );
}
