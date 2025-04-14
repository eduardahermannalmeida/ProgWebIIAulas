import { FormEvent, useState } from "react";
import { PlusCircle } from "@phosphor-icons/react";

import { FormProps } from "../../types/todo";

import "./styles.css";

export function Form({ onAddTodo }: FormProps) {
  const [input, setInput] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    if (!input.trim()) return;

    onAddTodo(input);
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button type="submit">
        Criar
        <PlusCircle size={20} />
      </button>
    </form>
  );
}
