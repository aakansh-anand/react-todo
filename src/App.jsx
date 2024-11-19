import TodoForm from "./components/TodoForm";
import TodoItem from "./components/TodoItem";
import { TodoProvider } from "./contexts/TodoContext";
import { useEffect, useState } from "react";
export default function App() {
  const [todos, setTodos] = useState([]);

  const addTodo = (todo) =>
    setTodos((prev) => [{ id: Date.now(), ...todo }, ...prev]);

  const deleteTodo = (id) =>
    setTodos((prev) => prev.filter((todo) => todo.id !== id));

  const updateTodo = (id, todo) =>
    setTodos((prev) =>
      prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo))
    );

  const toggleStatus = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  useEffect(() => {
    setTodos(JSON.parse(localStorage.getItem("todos")));
  },[])

  return (
    <TodoProvider
      value={{
        todos,
        addTodo,
        deleteTodo,
        toggleStatus,
        updateTodo,
      }}
    >
      <div className="bg-[#2f2f2f] min-h-screen py-8">
        <div className="w-full max-w-2xl mx-auto rounded-lg px-4 py-3 text-white">
          <h1 className="text-4xl font-semibold text-center mt-10">
            TodoApp
          </h1>
          <div className="mb-4">
            <TodoForm />
          </div>
          <div className="flex flex-wrap gap-y-3">
            {todos.map((todo) => {
              return (
                <div className="w-full" key={todo.id}>
                  <TodoItem todo={todo} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </TodoProvider>
  );
}
