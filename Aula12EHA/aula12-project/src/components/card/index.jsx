import "./styles.css";

export function Card({ img, title, description, price }) {
  return (
    <div className="card">
      <img src={img} alt="Pizza Foto" />
      <h1 className="title">{title}</h1>
      <p>{description}</p>
      <strong>R${price}</strong>
      <button type="button">comprar agora</button>
    </div>
  );
}
