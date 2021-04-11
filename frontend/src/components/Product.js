import "./Product.css";
import { Link } from "react-router-dom";

export const Product = () => {
  return (
    <div className="product">
      <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="" />
      <div className="product__info">
        <p className="info__name">Product 1</p>
        <p className="info__description">Description goes here</p>
        <p className="info__price">£12</p>
        <Link to={`/product/${1}`} className="info__button">View Product</Link>
      </div>
    </div>
  );
};
