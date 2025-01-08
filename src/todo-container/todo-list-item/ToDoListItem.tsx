interface Props {
    list: string[];
    onDelete: (value: string) => void;
  }

const TodoListItem = ({list, onDelete}: Props) => {
    return (
     <div>
      {list.map((item) =>(
       <>
         <div>{item}
         <button>
            edit
         </button>
         <button 
         onClick={() => onDelete(item)}>Delete</button>
         </div>
        
        </>
       
     ))}
    </div>
    ); 
};
 export default TodoListItem;