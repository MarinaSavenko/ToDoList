import TodoListItem from "../todo-list-item/ToDoListItem";

interface Props {
  list: string[];
  onDelete: (value: string) => void;
  onSave: (oldValue: string, newValue: string) => void;
}

const TodoList = ({ list, onDelete, onSave }: Props) => {
  return (
    <div>
      {list.map((item, index) => (
        <TodoListItem
          item={item}
          onDelete={onDelete}
          onSave={onSave}
          key={`todoItem${index}`}
        />
      ))}
    </div>
  );
};
export default TodoList;
