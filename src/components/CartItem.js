import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteFromCart } from '../store/actions/actions';

const CartItem = ({title, price, image, quantity, index}) => {

  const dispatch = useDispatch();
  console.log(index)
  
  return (
    <div className="card" style={{ width: "18rem" }}>
      {/* <img src="/images/01-crazy.jpg" className="card-img-top" alt="..." /> */}
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Price {price} $</p>
        <br />
        Quantity: {quantity}
        <br />
        Total: {quantity * price}
        <br />
        <br />
        <button onClick={() => dispatch(deleteFromCart(index))} className="btn btn-danger">
           {/* <button onClick={() => deleteFromCart(index)} className="btn btn-danger"> */}
          Delete
        </button>
      </div>
    </div>
  )
}

export default CartItem
