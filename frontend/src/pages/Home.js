import "./Home.css";
import { Product } from "../components/Product"

export const HomePage = () => {
  return (
    <div className="homepage">
      <h2 className="homepage__title">Products</h2>
      <div className="homepage__products">
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
        <Product />
      </div>
    </div>
  );
};
