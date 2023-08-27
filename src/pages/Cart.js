import React, { useEffect, useState } from "react";
import { getAll } from "../api/products";
import CartItem from "../components/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../store/actions/actions";

const Cart = () => {
  const [allProducts, setAllProducts] = useState([]);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   const getAllProduct = async () => {
  //     const fetchedProducts = await getAll();
  //     setAllProducts(await fetchedProducts);
  //     console.log("fetchedProducts");
  //     console.log(fetchedProducts);
  //   };
  //   getAllProduct();
  // }, []);

  const totalPrice = useSelector(state => state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0));
  const cartProducts = useSelector(state => state.cart);
  console.log(cartProducts);

  return (
    <div className="container">
      <h1>Products</h1>
      <div className="row">
        {cartProducts.map((item, index) => (
          <div className="col-3" key={index}>
            <CartItem title={item.product.title} image={item.product.image} price={item.product.price} id={item.product.id} quantity={item.quantity} index={index} />
          </div>
          
        ))}
      </div>
      <h3>
        Total: {totalPrice}
      </h3>
      <hr />
      <br />
      <button className="btn btn-primary d-block w-100" onClick={() => dispatch(clearCart())} >Place Order</button>
    </div>
  );
};


export default Cart
