import TodoListItem from "../todo-list-item/ToDoListItem";

interface Props {
    list: string[];
    onDelete: (value: string) => void;
}


const TodoList = ({list, onDelete}: Props) => {
    return (
     <div>
        <TodoListItem list={list} onDelete={onDelete}/>
     </div>
    ); 
};
 export default TodoList;