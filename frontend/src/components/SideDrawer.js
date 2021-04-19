import "./SideDrawer.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export const SideDrawer = ({ show, handleClick }) => {
  const sideDrawerClass = ["sidedrawer"];

  const auth = useSelector((state) => state.auth);
  const { authData, loggedIn } = auth;

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
            <Link to="/">Home</Link>
          </li>
          {authData || loggedIn ? (
          <li>
            <Link to="/account">My Account</Link> 
          </li>
        ) : (
          <li>
            <Link to="/login">Login</Link>
          </li>
        )}
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/cart">
              <FaShoppingCart />
              <span>Cart</span>
              <span className="sidedrawer__cartbadge">{getCartCount()}</span>
            </Link>
          </li>
        </ul>
      </div>
    )
  );
};
