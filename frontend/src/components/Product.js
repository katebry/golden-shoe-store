import "./Product.css";
import { Link } from "react-router-dom";

export const Product = ({name, description, price, imageUrl, productId}) => {
  return (
    <div className="product">
      <img src={imageUrl} alt={name} />
      <div className="product__info">
        <p className="info__name">{name}</p>
        <p className="info__description">{description}</p>
        <p className="info__price">{price}</p>
        <Link to={`/product/${productId}`} className="info__button">View Product</Link>
      </div>
    </div>
  );
};
