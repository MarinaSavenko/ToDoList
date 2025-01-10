import { Route, Routes } from "react-router";
import "./App.css";
import TodoContainer from "./todo-container/TodoContainer";
import ToDoPage from "./todo-page/ToDoPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<TodoContainer />} />
        <Route path="/:id" element={<ToDoPage />} />
      </Routes>
    </>
  );
}

export default App;
