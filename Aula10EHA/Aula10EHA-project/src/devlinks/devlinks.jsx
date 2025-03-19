import "./styles.css";
import profileImg from "../assets/images/profilepic.jpg";
import { Github, Youtube, Instagram, Linkedin, MoonStar } from "lucide-react";

export function DevLinks() {

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

      <div className="togggle-container">
        <label className="toggle-switch">
          <MoonStar size={16} />
        </label>
      </div>

      <div className="linkBtns">
        <button type="button"> Inscreva-se no NLW </button>
        <button type="button"> Baixe meu e-book </button>
        <button type="button"> Veja meu portfólio </button>
        <button type="button"> Conheça o Explorer </button>
      </div>

      <div className="socials">
        <a href="https://github.com" target="_blank">
          <Github />
        </a>
        <a href="https://www.instagram.com" target="_blank">
          <Instagram />
        </a>
        <a href="https://www.youtube.com" target="_blank">
          <Youtube />
        </a>
        <a href="https://www.linkedin.com" target="_blank">
          <Linkedin />
        </a>
      </div>
    </div>
  );
}
