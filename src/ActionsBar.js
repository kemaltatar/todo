import { useState } from "react";

function ActionsBar({ todos, setTodos }) {
  const [activeFilter, setActiveFilter] = useState("all");
  const getNumberOfIncompleteItems = () =>
    todos.filter((todo) => !todo.completed).length;
  const handleFilterAll = () => {
    setActiveFilter("all");
    setTodos(todos.map((todo) => ({ ...todo, visible: true })));
  };
  const handleFilterActive = () => {
    setActiveFilter("active");
    setTodos(todos.map((todo) => ({ ...todo, visible: !todo.completed })));
  };
  const handleFilterCompleted = () => {
    setActiveFilter("completed");
    setTodos(todos.map((todo) => ({ ...todo, visible: todo.completed })));
  };
  const clearCompleted = () => {
    setTodos(todos.filter((todo) => !todo.completed));
  };
  return (
    <div className="todo-actions-bar">
      <div className="todo-items-left">
        {getNumberOfIncompleteItems()} items left
      </div>
      <div className="todo-filters">
        <button
          className={`todo-filter ${activeFilter === "all" && "active"}`}
          onClick={handleFilterAll}
        >
          All
        </button>
        <button
          className={`todo-filter ${activeFilter === "active" && "active"}`}
          onClick={handleFilterActive}
        >
          Active
        </button>
        <button
          className={`todo-filter ${activeFilter === "completed" && "active"}`}
          onClick={handleFilterCompleted}
        >
          Completed
        </button>
      </div>
      <div>
        <button className="todo-clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </div>
    </div>
  );
}

export default ActionsBar;
