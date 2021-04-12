import "./Home.css";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "../components/index";
import { getAllProducts} from "../redux/actions/productActions";

export const HomePage = () => {
  const dispatch = useDispatch();

  const getProducts = useSelector((state) => state.getProducts);
  
  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(getAllProducts());
    console.log('calling useEffect hook')
  }, [dispatch]);

  return (
    <div className="homepage">
      <h2 className="homepage__title">Products</h2>
      <div className="homepage__products">
        {loading ? (
          <h2>LOADING...</h2>
        ) : error ? (
          <h2>There's a problem... {error}</h2>
        ) : (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.price}
              decrription={product.description}
            />
          ))
        )}
      </div>
    </div>
  );
};
