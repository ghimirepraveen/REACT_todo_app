import { BrowserRouter } from "react-router-dom";
import "./styles/app.css";
import { Switch } from "react-router-dom";
import Routes from "./routes/Routes";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Switch>
          <Routes></Routes>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
