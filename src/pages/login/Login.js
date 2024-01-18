import { Route } from "react-router-dom";
import Navbar from "../Navbar";
import { Link } from "react-router-dom";
import Showpage from "../showpage/Showpage";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";

const Login = () => {
  const history = useHistory();
  return (
    <>
      <Navbar />

      <div className="todo_container">
        {localStorage.getItem("loggedIn") ? (
          <>
            <div>
              <h3>You are already loggedin!!</h3>
            </div>
          </>
        ) : (
          <>
            <button
              onClick={() => {
                alert("You sucessifully loggedin!!");
                history.replace("/");
                localStorage.setItem("loggedIn", true);
              }}
            >
              Login
            </button>
            <br />
            <Link to="/login/showInfo">Nested Route | Show Info</Link>
            <Route path="/login/showInfo">
              <Showpage></Showpage>
            </Route>
          </>
        )}
      </div>
    </>
  );
};
export default Login;
