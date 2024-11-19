import { useTodo } from "../contexts/TodoContext";
import { useState } from "react";
import PropTypes from "prop-types";

function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.title);
  const { deleteTodo, toggleStatus, updateTodo } = useTodo();
  const editTodo = () => {
    updateTodo(todo.id, { ...todo, title: todoMsg });
    setIsTodoEditable(false);
  };

  const toggleCompleted = () => {
    toggleStatus(todo.id);
  };
  return (
    <div
      className={`flex  rounded-lg px-3 py-1.5 gap-x-3 duration-300 text-white ${
        todo.completed ? "bg-[#636363]" : "bg-[#1f1f1f]"
      }`}
    >
      {/* <Checkbox
        checked={todo.completed}
        onChange={toggleCompleted}
        className="cursor-pointer"
      /> */}

      <input
        type="checkbox"
        name=""
        id=""
        checked={todo.completed}
        onChange={toggleCompleted}
        className="cursor-pointer"
      />
      <input
        type="text"
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
        className={`outline-none w-full bg-transparent rounded-lg ${
          todo.completed ? "line-through" : ""
        }`}
      />
      <button
        className="inline-flex w-8 h-8 rounded-lg text-xl justify-center items-center  shrink-0 disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;
          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable(!isTodoEditable);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "📁" : "🖊️"}
      </button>
      <button
        className="inline-flex w-8 h-8 rounded-lg text-xl justify-center items-center shrink-0"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}
TodoItem.propTypes = {
  todo: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired,
  }).isRequired,
};
export default TodoItem;
