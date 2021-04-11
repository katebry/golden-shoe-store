import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export const NavBar = () => {
  const loggedIn = false;

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
        <li>
          <Link to="/">Home</Link>
        </li>
        {loggedIn ? (
          <li>
            <Link to="/account">My Account</Link>
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
      </ul>

      <div className="hamburger__menu">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};
