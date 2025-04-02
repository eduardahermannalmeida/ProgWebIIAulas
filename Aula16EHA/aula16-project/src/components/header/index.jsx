import "./styles.css";
import logo from "../../assets/ignitelogo.png";

export function Header() {
  return (
    <header className="flex">
      <img src={logo} alt="Logo da Ignite Feed" />
      <h1> Ignite Feed </h1>
    </header>
  );
}
