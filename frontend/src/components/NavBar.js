import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";

export const NavBar = ({ handleClick }) => {
  const loggedIn = false;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce((quantity, item) => Number(item.quantity) + quantity, 0)
  }

  return (
    <nav className="navBar">
      <div className="navBar__logo">
        <h2>Golden Shoes</h2>
      </div>
      <ul className="navBar__links">
        <li>
          <Link to="/cart" className="cart__link">
            <FaShoppingCart />
            <span>Cart</span>
            <span className="cart__badge">{getCartCount()}</span>
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

      <div className="hamburger__menu" onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};
