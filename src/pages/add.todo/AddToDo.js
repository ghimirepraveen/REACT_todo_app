import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../Navbar";
import { useRef } from "react";
import AuthCheck from "../../middleware/Authcheck";

const AddToDo = () => {
  const todotext = useRef();
  const history = useHistory();

  AuthCheck();

  const addToDo = (e) => {
    e.preventDefault();
    const todoString = todotext.current.value;

    const initialTodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];

    initialTodo.push(todoString);

    localStorage.setItem("todo", JSON.stringify(initialTodo));

    history.push("/");
  };

  return (
    <>
      <Navbar />
      <div className="todo_container">
        <h1> Add to_do</h1>
        <form onSubmit={addToDo}>
          <input type="text" ref={todotext} />
          <button>Save to do </button>
        </form>
      </div>
    </>
  );
};
export default AddToDo;
