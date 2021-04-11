import "./CartItem.css"
import {Link} from "react-router-dom"

export const CartItem = () => {
    return (
        <div className="cartitem">
            <div className="cartitem__image">
                <img src="https://images.unsplash.com/photo-1491553895911-0055eca6402d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" alt="" />
            </div>
            <Link to={`/product/${1}`} className="cartitem__name">
                <p>Product Name</p>
            </Link>
            <p className="cartitem__price">£89.90</p>
            <select className="cartitem__select">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <button className="cartitem__deleteBtn">Delete</button>
        </div>
    )
}