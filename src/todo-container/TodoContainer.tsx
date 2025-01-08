import { useState } from "react";
import TodoForm from "./todo-form/ToDoForm";
import TodoList from "./todo-list/ToDoList";

const TodoContainer = () => {
  const [list, setList] = useState<string[]>([]);

  return (
    <>
      <TodoForm
        onAdd={(newValue: string) => {
          setList([...list, newValue]);
        }}
      />
      <TodoList
        list={list}
        onSave={(oldValue: string, newValue: string) => {
          setList(list.map((item) => (item === oldValue ? newValue : item)));
        }}
        onDelete={(value: string) => {
          setList(list.filter((item) => item !== value));
        }}
      />
    </>
  );
};
export default TodoContainer;
