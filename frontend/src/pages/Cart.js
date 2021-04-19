import { useState } from "react";
import "./Cart.css";
import { CartItem } from "../components/index";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToCart, removeFromCart } from "../redux/actions/cartActions";
import styled from "styled-components";

const InputWrapper = styled.div`
  padding: 8px;
`;

const StyledOfferText = styled.div`
  font-weight: bold;
  padding: 8px;
`

export const CartPage = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;
  const [discount, setDiscount] = useState("");

  const quantityChangeHandler = (id, quantity) => {
    dispatch(addToCart(id, quantity));
  };

  const removeHandler = (id) => {
    dispatch(removeFromCart(id));
  };

  const getCartCount = () => {
    return cartItems.reduce(
      (quantity, item) => Number(item.quantity) + quantity,
      0
    );
  };

  const getCartTotal = () => {
    let cartTotal = cartItems.reduce(
      (price, item) => item.price * item.quantity + price,
      0
    );
    return cartTotal >= 60 ? cartTotal - 10 : cartTotal;
  };

  return (
    <div className="cartpage">
      <div className="cartpage__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to="/">Back to Shop</Link>
          </div>
        ) : (
          cartItems.map((item) => (
            <CartItem
              key={item.product}
              item={item}
              quantityChangeHandler={quantityChangeHandler}
              removeHandler={removeHandler}
            />
          ))
        )}
      </div>
      <div className="cartpage__right">
        <div className="cartpage__info">
          <p>Items in cart: {getCartCount()}</p>
          <p>Total cost: £{getCartTotal().toFixed(2)}</p>
          {getCartTotal().toFixed(2) >= 60 && (
            <StyledOfferText>Congratulations, you qualify for our £10 off discount!</StyledOfferText>
          )}
          <p>Got a discount code? Enter it here:</p>
          <InputWrapper>
            <input
              type="text"
              placeholder="%EXAMPLE%"
              value={discount}
              onChange={(e) => setDiscount(e.target.value)}
            />
          </InputWrapper>
        </div>
        <div>
          <button className="cartpage__btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};
