import "./style.css";
import { Botoes } from "../button";

export function Card({ image, tags, title, description, price }) {
  return (
      <div className="card">
        <img src={image} alt="foto do café" id="coffeeImage" />
        <div className="tags">
        {tags.map((tag, index) => (
          <span key={index}>{tag}</span>
        ))}
      </div>
        <h1 id="title">{title}</h1>
        <p id="description">{description}</p>
        <Botoes val={price} />
      </div>
  );
}
