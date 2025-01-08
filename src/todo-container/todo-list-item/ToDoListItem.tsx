import { useState } from "react";

interface Props {
  item: string;
  onDelete: (value: string) => void;
  onSave: (oldValue: string, newValue: string) => void;
}

const TodoListItem = ({ item, onDelete, onSave }: Props) => {
  const [edit, setEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(item);

  return (
    <>
      <div>
        {edit ? (
          <input value={value} onChange={(e) => setValue(e.target.value)} />
        ) : (
          item
        )}
        {edit && (
          <button
            onClick={() => {
              setEdit(false);
              onSave(item, value);
            }}
          >
            Save
          </button>
        )}
        <button
          onClick={() => {
            setEdit(!edit);
          }}
        >
          edit
        </button>
        <button onClick={() => onDelete(item)}>Delete</button>
      </div>
    </>
  );
};
export default TodoListItem;
