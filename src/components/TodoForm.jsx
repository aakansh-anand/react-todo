import { useTodo } from "../contexts/TodoContext";
import { useState } from "react";

const TodoForm = () => {
  const submitHandler = (e) => {
    e.preventDefault();
    if (!todo) return;
    addTodo({ title: todo, completed: false });
    setTodo("");
  };
  const { addTodo } = useTodo();
  const [todo, setTodo] = useState("");
  return (
    <div>
      <form onSubmit={submitHandler} className="flex mt-10">
        <input
          type="text"
          value={todo}
          onChange={(e) => setTodo(e.target.value)}
          placeholder="Add task ..."
          className=" w-full  rounded-l-lg px-3 outline-none duration-150 bg-zinc-800 py-1.5"
        />

        <button
          type="submit"
          className="rounded-r-lg px-3 py-1 bg-zinc-800 text-white shrink-0"
        >
          <img 
            src="/arrow-up.svg"
            alt="add button"
            className="h-10 p-2"
          />
        </button>
      </form>
    </div>
  );
};
export default TodoForm;
