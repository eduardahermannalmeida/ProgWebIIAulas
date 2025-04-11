import { Trash } from "@phosphor-icons/react";
import "./styles.css";

interface TaskProps {
  id: number;
  description: string;
  onDelete: (id: number) => void;
  onUpdate: (id: number) => void;
}

export function Task({ id, description, onDelete, onUpdate }: TaskProps) {
  return (

    <div className="task-container">
      <p className="task-description">{description}</p>

      <input
        type="checkbox"
        className="check-btn"
        aria-label="Concluir tarefa"
        title="Concluir"
        onClick={() => onUpdate(id)}
      />

      <button
        type="button"
        className="delete-btn"
        aria-label="Excluir tarefa"
        title="Excluir"
        onClick={() => onDelete(id)}
      >
        <Trash size={24} />
      </button>
      
    </div>

  );
}
