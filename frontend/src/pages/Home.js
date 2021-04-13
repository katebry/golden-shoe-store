import "./Home.css";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "../components/index";
import { getAllProducts } from "../redux/actions/productActions";
import sale from "../assets/sale.png";

export const HomePage = () => {
  const dispatch = useDispatch();
  const [categoryButtons, setCategoryButtons] = useState([]);
  const [filterByCategory, setFilterByCategory] = useState("");

  const getProducts = useSelector((state) => state.getProducts);

  const { products, loading, error } = getProducts;

  useEffect(() => {
    dispatch(getAllProducts());
  }, [dispatch]);

  useEffect(() => {
    // TODO unit test this function
    const uniqueCategories = products.reduce((unique, o) => {
      if (!unique.some((obj) => obj.category === o.category)) {
        unique.push(o);
      }
      return unique;
    }, []);

    setCategoryButtons(uniqueCategories);
  }, [products]);

  const filterProducts = (category) => {
    console.log(category);
    setFilterByCategory(category);
  };

  return (
    <div className="homepage">
      <div className="saleImage">
        <img
          src={sale}
          alt="20% off kids shoes, enter code 'KID20'. Spend £60 and get £10 off your purchase (excluding kids shoes)"
        />
      </div>
      <div className="categoryFilter">
        Filter by Category:
        {categoryButtons.map((type) => (
          <button
            key={type.category}
            onClick={() => filterProducts(type.category)}
          >
            {type.category}
          </button>
        ))}
      </div>
      <div className="homepage__products">
        {loading ? (
          <h2>LOADING...</h2>
        ) : error ? (
          <h2>There's a problem... {error}</h2>
        ) : !filterByCategory ? (
          products.map((product) => (
            <Product
              key={product._id}
              productId={product._id}
              name={product.name}
              imageUrl={product.imageUrl}
              price={product.price}
              description={product.description}
              category={product.category}
            />
          ))
        ) : (
          products
            .filter((product) => product.category === filterByCategory)
            .map((product) => (
              <Product
                key={product._id}
                productId={product._id}
                name={product.name}
                imageUrl={product.imageUrl}
                price={product.price}
                description={product.description}
                category={product.category}
              />
            ))
        )}
      </div>
    </div>
  );
};
