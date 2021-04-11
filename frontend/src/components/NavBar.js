import "./NavBar.css"
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="navBar__Logo">
        <h2>Golden Shoes</h2>
      </div>
      <ul className="navBar__Links">
        <li>
          <Link to="/cart"></Link>
        </li>
      </ul>
    </nav>
  );
};
