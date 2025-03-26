import "./styles.css";
import { Github, Youtube, Instagram, Linkedin, MoonStar, Sun } from "lucide-react";
import { api } from "../services/api";
import { useEffect, useState } from "react";
import { useTheme } from  "../context/ThemeContext";

export function DevLinks() {

  const { theme, toggleTheme } = useTheme();
  const [user, setUser] = useState([]);

  useEffect(() => {
    async function getUserData() {
      try {
        const response = await api.get("/users/eduardahermannalmeida");

        setUser(response.data);
      } catch (error) {
        console.log("Erro ao buscar os dados do usuário", error);
      }
    }

    getUserData();
  }, []);

  return (
    <div className={`container ${theme}`}>
      <div className="userInfo">
        <img
          src={user.avatar_url}
          alt="Foto de Perfil"
          height="112px"
          width="112px"
          id="pfpIcon"
        />
        <p> @{user.login} </p>
      </div>

      <div className="toggle-container" onClick={toggleTheme}>
        <label className="toggle-switch">
          {theme== "dark" ? <Sun size={16} /> : <MoonStar size={16} />}
        </label>
      </div>

      <div className="linkBtns">
        <button type="button"> Inscreva-se no NLW </button>
        <button type="button"> Baixe meu e-book </button>
        <button type="button"> Veja meu portfólio </button>
        <button type="button"> Conheça o Explorer </button>
      </div>

      <div className="socials">
        <a href="https://github.com/eduardahermannalmeida" target="_blank">
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
