import { useContext, useState } from "react";
import { ListContext } from "../TodoContainer";

interface Props {
  item: string;
}

const TodoListItem = ({ item }: Props) => {
  const [list, setList] = useContext(ListContext);

  const [edit, setEdit] = useState<boolean>(false);
  const [value, setValue] = useState<string>(item);

  const onSave = (oldValue: string, newValue: string) => {
    setList(list.map((item) => (item === oldValue ? newValue : item)));
  };

  const onDelete = (value: string) => {
    setList(list.filter((item) => item !== value));
  };

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
