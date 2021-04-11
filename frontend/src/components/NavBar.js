import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons";

export const NavBar = () => {
  return (
    <nav className="navBar">
      <div className="navBar__Logo">
        <h2>Golden Shoes</h2>
      </div>
      <ul className="navBar__Links">
        <li>
          <Link to="/cart">
            <FaShoppingCart />
            Cart
            <span className="cart__badge">0</span>
          </Link>
        </li>
      </ul>
    </nav>
  );
};
