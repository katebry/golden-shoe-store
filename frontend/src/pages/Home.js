import "./Home.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "../components/Product";
import { getProducts as listProducts} from "../redux/actions/productActions"
 
export const HomePage = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(listProducts())
  }, [dispatch])

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
