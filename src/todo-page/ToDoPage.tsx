import { useParams } from "react-router";

const ToDoPage = () => {
  const { id } = useParams();

  return <h1>todo page</h1>;
};

export default ToDoPage;
