import { Button } from "./components/button";

export function App() {
  const numbers = [1, 2, 3, 4, 5];

  return (
    <>
      <ul>
        {numbers.map((number, index) => (
          <li key={index}> {number} </li>
        ))}
      </ul>
      <Button title="click" />
    </>
  );
}
