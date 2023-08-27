import React from "react";
import { Link } from "react-router-dom";
import { Connect } from "react-redux";
import { useSelector } from "react-redux";

const CartIcon = () => {
  // const itemsQuantity = useSelector(state => state.cart[0].quantity);
  console.log(useSelector(state => console.log(state.cart)));
  const itemsQuantity = useSelector(state => state.cart.reduce((total, item) => total + Number(item.quantity), Number(0)));
  console.log(itemsQuantity)
  return (
    <div id="cart-icon">
      <Link to="/cart">
        <i className="fa fa-shopping-cart"></i>
        <span className="badge bg-danger">{itemsQuantity}</span>
      </Link>
    </div>
  );
};

export default CartIcon;
