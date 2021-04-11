import "./ProductPage.css";

export const ProductPage = () => {
  return (
    <div className="productscreen">
      <div className="productscreen__left">
        <div className="left__image">
          <img
            src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
            alt=""
          />
        </div>
        <div className="left__info">
          <p className="left__name">Product Name</p>
          <p>Price: £12.00</p>
          <p>Description of the product</p>
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
          <p><button type="button">Add To Cart</button></p>
        </div>
      </div>
    </div>
  );
};
