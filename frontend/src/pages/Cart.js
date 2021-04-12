import "./Cart.css";
import { CartItem } from "../components/CartItem";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export const CartPage = () => {
  const dispatch = useDispatch();

  const cart = useSelector((state) => state.cart);
  const { cartItems } = cart;

  return (
    <div className="cartpage">
      <div className="cartpage__left">
        <h2>Shopping Cart</h2>
        {cartItems.length === 0 ? (
          <div>
            Your cart is empty <Link to="/">Back to Shop</Link>
          </div>
        ) : (
          cartItems.map((item) => <CartItem item={item}/>)
        )}
      </div>
      <div className="cartpage__right">
        <div className="cartpage__info">
          <p>Subtotal: 0 items</p>
          <p>Price: £34.99</p>
        </div>
        <div>
          <button className="cartpage__btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  );
};
