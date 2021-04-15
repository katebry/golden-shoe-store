import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledTitle = styled(Link)`
  margin-left: 10px;
  color: black;
  font-size: 1.7rem;
  cursor: pointer;
  text-decoration: none;
  font-weight: 500;
`;

export const NavBar = ({ handleClick }) => {

  const auth = useSelector((state) => state.auth);
  const { authData, loggedIn } = auth;

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  const getCartCount = () => {
    return cartItems.reduce(
      (quantity, item) => Number(item.quantity) + quantity,
      0
    );
  };

  return (
    <nav className="navBar">
      <StyledTitle to="/">Golden Shoes</StyledTitle>
      <ul className="navBar__links">
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
          <Link to="/cart" className="cart__link">
            <FaShoppingCart />
            <span>Cart</span>
            <span className="cart__badge">{getCartCount()}</span>
          </Link>
        </li>
      </ul>

      <div className="hamburger__menu" onClick={handleClick}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </nav>
  );
};
