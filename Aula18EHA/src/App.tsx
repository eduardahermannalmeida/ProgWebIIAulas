import { Header } from "./components/header"
import { Task } from "./components/task";
import { useEffect, useState } from "react";
import { api } from "./services/api";
import { TodoType } from "./types/todo";

import "./App.css";

export function App() {
const [todos, setTodos] = useState<TodoType[]>([]);

  useEffect(() => {
    api.get('/').then((response) => {
      setTodos(response.data.todos);
    });
  }, []);

  return (
    <>
      <Header />
      <div className="todo-list">
        <div className="header">
          <div className="created-tasks">
            <p> Tarefas criadas </p>
            <span> {todos.length} </span>
          </div>

          <div className="completed-tasks">
            <p> Concluídas </p>
            <span> {todos.filter((todo) => todo.completed).length} </span>
          </div>
        </div>

        <div className="tasks-list">
          {todos.map(({id, todo}) => (
            <Task key={id} description={todo}/>
          ))}
        </div>
      </div>
    </>
  );
}
