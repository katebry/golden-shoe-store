import "./CartItem.css";
import { Link } from "react-router-dom";

export const CartItem = ({ item, quantityChangeHandler, removeHandler }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cartitem__name">
        <p>{item.name}</p>
      </Link>
      <p className="cartitem__price">£{item.price}</p>
      <select
        className="cartitem__select"
        value={item.quantity}
        onChange={(event) => quantityChangeHandler(item.product, event.target.value)}
      >
        {[...Array(item.countInStock).keys()].map((stockCount) => (
          <option key={stockCount + 1} value={stockCount + 1}>
            {stockCount + 1}
          </option>
        ))}
      </select>
      <button className="cartitem__deleteBtn" onClick={() => removeHandler(item.product)}>Delete</button>
    </div>
  );
};
