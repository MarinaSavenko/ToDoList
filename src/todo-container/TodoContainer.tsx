import { useState } from "react";
import TodoForm from "./todo-form/ToDoForm";
import TodoList from "./todo-list/ToDoList";
import { createContext } from "react";

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
    </ListContext.Provider>
  );
};
export default TodoContainer;
