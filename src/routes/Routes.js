import { Route } from "react-router-dom/cjs/react-router-dom";
import Mainpage from "../pages/mainPage/mainpage";
import AddToDo from "../pages/add.todo/AddToDo";

const Routes = () => {
  return (
    <>
      <Route path="/" component={Mainpage} exact />
      <Route path="/add" component={AddToDo} exact />
    </>
  );
};
export default Routes;
