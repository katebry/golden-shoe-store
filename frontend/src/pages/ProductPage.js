import "./ProductPage.css";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProductDetails } from "../redux/actions/productActions";
import { addToCart } from "../redux/actions/cartActions";

export const ProductPage = ({ match, history }) => {
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const productDetails = useSelector((state) => state.getProductDetails);
  const { loading, error, product } = productDetails;

  useEffect(() => {
    if (product && match.params.id !== product._id) {
      dispatch(getProductDetails(match.params.id));
    }
  }, [dispatch, product, match]);

  return (
    <div className="productscreen">
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h2>Woops, something went wrong... {error}</h2>
      ) : (
        <>
          <div className="productscreen__left">
            <div className="left__image">
              <img
                src={product.imageUrl}
                alt={product.name}
              />
            </div>
            <div className="left__info">
              <p className="left__name">{product.name}</p>
              <p>Price: £{product.price}</p>
              <p>{product.description}</p>
            </div>
          </div>
          <div className="productscreen__right">
            <div className="right__info">
              <p>
                Price <span>the price</span>
              </p>
              <p>
                Status: <span>In Stock</span>
              </p>
              <p>
                Quantity:{" "}
                <select>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                </select>
              </p>
              <p>
                <button type="button">Add To Cart</button>
              </p>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
