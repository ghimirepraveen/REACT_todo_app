import { Link } from "react-router-dom/cjs/react-router-dom.min";
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
        {getTodo.map((el, index) => (
          <>
            <div className="single_todo">
              {el}
              <Link to={`/view/${index}`}>
                <FaEye size={"20px"} />
              </Link>
            </div>
          </>
        ))}
      </div>
    </>
  );
};
export default Mainpage;
