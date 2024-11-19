import { createContext, useContext } from "react";

export const TodoContext = createContext({
  todos: [
    {
      id: 1,
      title: "Learn React",
      completed: false,
    },
  ],
  deleteTodo: (id) => {},
  toggleStatus: (id) => {},
  addTodo: (todo) => {},
  updateTodo: (id, todo) => {},
});

export const useTodo = () => useContext(TodoContext);

export const TodoProvider = TodoContext.Provider;
