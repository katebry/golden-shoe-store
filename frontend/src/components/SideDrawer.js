import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export const SideDrawer = ({ show, handleClick }) => {
  const sideDrawerClass = ["sidedrawer"];

  const loggedIn = false;

  if (show) sideDrawerClass.push("show");

  return (
    show && (
      <div className={sideDrawerClass.join(" ")}>
        <ul className="sidedrawer__links" onClick={handleClick}>
          <li>
            <Link to="/cart">
              <FaShoppingCart />
              <span>Cart</span>
              <span className="sidedrawer__cartbadge">0</span>
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
      </div>
    )
  );
};
