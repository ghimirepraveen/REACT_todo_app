import { useHistory } from "react-router-dom";

const AuthCheck = () => {
  const history = useHistory();
  !localStorage.getItem("loggedIn") && history.replace("/login");
};
export default AuthCheck;
