import "./CartItem.css";
import { Link } from "react-router-dom";

export const CartItem = ({ item }) => {
  return (
    <div className="cartitem">
      <div className="cartitem__image">
        <img src={item.imageUrl} alt={item.name} />
      </div>
      <Link to={`/product/${item.product}`} className="cartitem__name">
        <p>{item.name}</p>
      </Link>
      <p className="cartitem__price">£{item.price}</p>
      <select className="cartitem__select" value={item.quantity} onChange={() => console.log('yes')}>
        {[...Array(item.countInStock).keys()].map(x => (
            <option key={x+1} value={x+1}>{x+1}</option>
        ))}
      </select>
      <button className="cartitem__deleteBtn">Delete</button>
    </div>
  );
};
