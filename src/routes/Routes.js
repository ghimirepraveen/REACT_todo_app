import { Route } from "react-router-dom/cjs/react-router-dom";
import Mainpage from "../pages/mainPage/mainpage";
import AddToDo from "../pages/add.todo/AddToDo";
import Viewpage from "../pages/viewpage/Viewpage";
import { Redirect } from "react-router-dom/cjs/react-router-dom.min";
import Login from "../pages/login/Login";
import Notfound from "../pages/notfound/Notfound";
import { Switch } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

const Routes = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Route path="/" exact>
            <Redirect to="/home"></Redirect>
          </Route>

          <Route path="/home" component={Mainpage} />
          <Route path="/add" exact>
            <AddToDo />
          </Route>
          <Route path="/login" component={Login} />
          <Route path="/view/:id" component={Viewpage} exact />
          <Route path="*">
            <Notfound />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};
export default Routes;
