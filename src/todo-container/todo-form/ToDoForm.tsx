import { useState } from "react";

interface Props {
    onAdd: (newValue: string) => void;
}

const TodoForm = ({ onAdd }: Props) => {
   const [value, setValue] = useState('test');
    
   return (
        <div>
          <input 
            type="text" 
            value={value}
            onChange={(e) =>{
                 setValue(e.target.value);
            }}
          />
         <button 
            onClick={() => {
                onAdd(value);
                setValue('');
            }}
         >
            Add
         </button>
        </div>
    );

}
 export default TodoForm;


