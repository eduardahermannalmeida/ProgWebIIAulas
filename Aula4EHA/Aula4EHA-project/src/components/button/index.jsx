import "./styles.css";

export function Button({ title }) {
  return (
    <button type="Button" className="signNow">
      <strong>{title}</strong>
    </button>
  );
}
