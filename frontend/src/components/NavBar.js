import "./NavBar.css";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import { useSelector } from "react-redux";
import styled from "styled-components";

const StyledHomeLink = styled(Link)`
  &:hover {
    color: #ca3cff;
  }
`;

const StyledLoginLink = styled(Link)`
 &:hover {
    color: #08FF00;
  }`

const StyledContactLink = styled(Link)`
  &:hover {
    color: #1F00FF;
  }
`

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
      <div className="navBar__logo">
        <h2>Golden Shoes</h2>
      </div>
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
