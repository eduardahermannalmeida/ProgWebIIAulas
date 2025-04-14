import { Trash } from "@phosphor-icons/react";
import "./styles.css";

interface TaskProps {
  id: number;
  description: string;
  completed: boolean;
  onDelete: (id: number) => void;
  onToggleComplete: (id: number, completed: boolean) => void;
}

export function Task({
  id,
  description,
  completed,
  onDelete,
  onToggleComplete,
}: TaskProps) {
  return (
    <div className="task-container">
      <input
        type="checkbox"
        checked={completed}
        onChange={() => onToggleComplete(id, completed)}
      />
      <p className={`task-description ${completed ? "completed" : ""}`}>
        {description}
      </p>
      <button
        type="button"
        className="delete-btn"
        aria-label="Excluir tarefa"
        title="Exlcuir"
        onClick={() => onDelete(id)}
      >
        <Trash size={24} />
      </button>
    </div>
  );
}
