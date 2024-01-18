import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import Navbar from "../Navbar";

const Viewpage = () => {
  const history = useHistory();
  const goback = () => {
    history.push("/");
  };

  const getPrams = useParams();
  const getId = getPrams.id;
  const getStorage = localStorage.getItem("todo")
    ? JSON.parse(localStorage.getItem("todo"))
    : [];
  const getData = getStorage[getId];
  const deleteTodo = () => {
    getStorage.splice(getId, 1);
    localStorage.setItem("todo", JSON.stringify(getStorage));
    history.replace("/");
  };

  return (
    <>
      <Navbar />
      <div className="todo_container">
        <button
          onClick={goback}
          style={{ backfaceVisibility: "black", color: "black" }}
        >
          Go Back
        </button>
        <div
          style={{
            background: "#7e7e7e",
            padding: "20px",
            fontSize: "20px",
            margin: "20px",
          }}
        >
          {getData}
          <button style={{ background: "red" }} onClick={deleteTodo}>
            Delete TO-Do
          </button>
        </div>
      </div>
    </>
  );
};
export default Viewpage;
