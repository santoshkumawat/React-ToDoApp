import React from "react";
import Header from "./components/Header";
import TodoItem from "./components/TodoItem";
import Button from "./components/Button";
import "./style.css";

const App = () => {
  return (
    <div className="todo-container">
      <Header title="Todo App"></Header>
      <TodoItem text="Eat"></TodoItem>
      <TodoItem text="Code"></TodoItem>
      <TodoItem text="Coffee"></TodoItem>
      <TodoItem text="Sleep"></TodoItem>
      <TodoItem text="Repeat"></TodoItem>
      <Button name="Add Todo"></Button>
    </div>
  );
}

export default App;