import { useContext } from "react";
import TodoListItem from "../todo-list-item/ToDoListItem";
import { ListContext } from "../TodoContainer";

interface Props {}

const TodoList = (props: Props) => {
  const [list] = useContext(ListContext);

  return (
    <div>
      {list.map((item, index) => (
        <TodoListItem item={item} key={`todoItem${index}`} />
      ))}
    </div>
  );
};
export default TodoList;
