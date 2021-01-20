function TodoItem({ todo, handleToggleCompleted, handleRemoveTodo }) {
  const { completed, text, id } = todo;
  const handleRemoveClick = (e) => {
    e.stopPropagation();
    handleRemoveTodo(id);
  };

  return (
    <div
      className={`todo-item ${completed ? "todo-item-completed" : ""}`}
      onClick={() => handleToggleCompleted(todo)}
    >
      <input
        className="todo-item-checkbox"
        type="checkbox"
        checked={completed}
        onChange={() => handleToggleCompleted(todo)}
      />
      {text}
      <button className="todo-item-remove" onClick={handleRemoveClick}>
        X
      </button>
    </div>
  );
}
export default TodoItem;
