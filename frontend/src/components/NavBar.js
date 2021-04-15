import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledTitle = styled(Link)`
  margin-left: 10px;
  color: #ca3cff;
  font-size: 1.7rem;
  cursor: pointer;
  text-decoration: none;
  font-weight: bold;
  &:hover {
    color: #08ff00;
  }
`;

const StyledHomeLink = styled(Link)`
  &:hover {
    color: #ca3cff;
  }
`;

const StyledLoginLink = styled(Link)`
  &:hover {
    color: #08ff00;
  }
`;

const StyledContactLink = styled(Link)`
  &:hover {
    color: #1f00ff;
  }
`;

export const NavBar = ({ handleClick }) => {
  const loggedIn = false;

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
      <StyledTitle to="/">GOLDEN SHOES</StyledTitle>
      <ul className="navBar__links">
        <li>
          <StyledHomeLink to="/">Home</StyledHomeLink>
        </li>
        {loggedIn ? (
          <li>
            <StyledLoginLink to="/account">My Account</StyledLoginLink> 
          </li>
        ) : (
          <li>
            <StyledLoginLink to="/login">Login</StyledLoginLink>
          </li>
        )}
        <li>
          <StyledContactLink to="/contact">Contact</StyledContactLink>
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
