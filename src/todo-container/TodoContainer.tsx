import { useState } from "react";
import TodoForm from "./todo-form/ToDoForm";
import TodoList from "./todo-list/ToDoList";
import { createContext } from "react";
import { NavLink } from "react-router";

export const ListContext = createContext<any[]>([]);

const TodoContainer = () => {
  const [list, setList] = useState<string[]>([]);

  return (
    <ListContext.Provider value={[list, setList]}>
      <TodoForm
        onAdd={(newValue: string) => {
          setList([...list, newValue]);
        }}
      />
      <TodoList />
      <NavLink to="/123">todoPage</NavLink>
    </ListContext.Provider>
  );
};
export default TodoContainer;
