import "./Cart.css";
import { CartItem } from "../components/CartItem";

export const CartPage = () => {
  return (
    <div className="cartpage">
      <div className="cartpage__left">
        <h2>Shopping Cart</h2>
        <CartItem />
      </div>
      <div className="cartpage__right">
          <div className="cartpage__info">
              <p>Subtotal: 0 items</p>
              <p>Price: £34.99</p>
          </div>
          <div><button>Proceed to Checkout</button></div>
      </div>
    </div>
  );
};
