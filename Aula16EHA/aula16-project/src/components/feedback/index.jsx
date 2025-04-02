import "./styles.css";

export function Feedback({ pfp, name, time, content, likes }) {
  return (
    <div className="grid">

        <img src={pfp} alt="Foto de Perfil do Usuário" />

        <div className="left">

        <div className="feedback-area">
          <h1 className="name"> {name} </h1>
          <p className="time"> Cerca de {time} </p>
          <p className="content"> {content} </p>
        </div>

        <button type="button">
          <ThumbsUp size={16.08} />
          Apladir • {likes}
        </button>

      </div>

    </div>
  );
}
