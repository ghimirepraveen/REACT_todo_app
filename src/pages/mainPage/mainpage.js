import Navbar from "../Navbar";
import { FaEye } from "react-icons/fa";
const Mainpage = () => {
  const getTodo = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];

  return (
    <>
      <Navbar></Navbar>
      <div className="todo_container">
        <h3>Your to-do</h3>
        {getTodo.map((el) => (
          <>
            <div className="single_todo">
              {el}
              <FaEye />
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default Mainpage;
