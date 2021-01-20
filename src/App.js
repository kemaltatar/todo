import { useState } from "react";
import TodoItem from "./TodoItem";
import ActionsBar from "./ActionsBar";

function App() {
  const [todos, setTodos] = useState([]);

  const addNewTodo = (text) => {
    setTodos([
      ...todos,
      { id: todos.length, text, completed: false, visible: true },
    ]);
  };

  const updateTodo = (todo, id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    setTodos([...todos.slice(0, index), todo, ...todos.slice(index + 1)]);
  };

  const handleKeyPress = (e) => {
    const { value } = e.target;
    if (e.key === "Enter" && value) {
      addNewTodo(value);
      e.target.value = "";
    }
  };

  const handleToggleCompleted = (todo) => {
    updateTodo(
      {
        ...todo,
        completed: !todo.completed,
      },
      todo.id
    );
  };

  const handleRemoveTodo = (id) => {
    const index = todos.findIndex((todo) => todo.id === id);
    setTodos([...todos.slice(0, index), ...todos.slice(index + 1)]);
  };

  return (
    <div className="wrapper">
      <input className="todo-input" type="text" onKeyPress={handleKeyPress} />
      {todos.length > 0 && (
        <>
          <div className="todo-list">
            {todos
              .filter((todo) => todo.visible)
              .map((todo, i) => (
                <TodoItem
                  key={`todo-item-key-${i}`}
                  todo={todo}
                  handleToggleCompleted={handleToggleCompleted}
                  handleRemoveTodo={handleRemoveTodo}
                />
              ))}
          </div>
          <ActionsBar todos={todos} setTodos={setTodos} />
        </>
      )}
    </div>
  );
}

export default App;
