import "./styles.css";

export function Post({ pfp, name, job, time, content, link, hashtags }) {
  return (
    <div className="post">
      <div className="post-top">
        <div>
          <img src={pfp} alt="Foto de Perfil do Usuário" />
          <h1 className="name"> {name} </h1>
          <h2 className="job"> {job} </h2>
        </div>

        <div>
          <p> Publicado há {time}</p>
        </div>
      </div>

      <div className="post-bottom">
        <p className="content"> {content} </p>
        <p className="link"> 👉{link} </p>
        <p className="hashtags"> {hashtags} </p>
        <hr/>
        <p> Deixe seu FeedBack! </p>
        <input type="text"/>
        <button type="button" className="btn-publish"> Publicar </button>
      </div>
    </div>
  );
}
