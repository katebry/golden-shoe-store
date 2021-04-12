import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export const SideDrawer = ({ show, handleClick }) => {
  const sideDrawerClass = ["sidedrawer"];

  const loggedIn = false;

  if (show) sideDrawerClass.push("show");

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce(
      (quantity, item) => Number(item.quantity) + quantity,
      0
    );
  };

  return (
    show && (
      <div className={sideDrawerClass.join(" ")}>
        <ul className="sidedrawer__links" onClick={handleClick}>
          <li>
            <Link to="/cart">
              <FaShoppingCart />
              <span>Cart</span>
              <span className="sidedrawer__cartbadge">{getCartCount()}</span>
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
