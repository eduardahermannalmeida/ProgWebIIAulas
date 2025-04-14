import logoImg from "../../assets/logo.svg";
import { Form } from "../form";
import { FormProps } from "../../types/todo";

import "./styles.css";

export function Header({ onAddTodo }: FormProps) {
  return (
    <header>
      <img src={logoImg} alt="to do logo" />
      <Form onAddTodo={onAddTodo} />
    </header>
  );
}
