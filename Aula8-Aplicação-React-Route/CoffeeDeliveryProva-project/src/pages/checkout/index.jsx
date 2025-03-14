import { useNavigate } from "react-router";
import "./styles.css";

export function Checkout() {
  const navigate = useNavigate();

  function handleNavigate() {
    navigate("/");
  }

  return (
    <>
      <h1> Checkout </h1>
      <button onClick={() => handleNavigate()}>Home</button>
    </>
  );
}
