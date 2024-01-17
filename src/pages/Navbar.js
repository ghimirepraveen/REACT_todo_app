import { Link } from "react-router-dom/cjs/react-router-dom.min";
const Navbar = () => {
  return (
    <>
      <div className="nav_bar">
        todo version 1<div className="menu_item"></div>
        <Link to="/">
          <div>Home</div>
        </Link>
        <Link to="/add">
          <div>Add Todo</div>
        </Link>
      </div>
    </>
  );
};
export default Navbar;
