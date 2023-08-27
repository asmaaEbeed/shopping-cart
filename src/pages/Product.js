import React, { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getOne } from "../api/products";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/actions/actions";

import Card from 'react-bootstrap/Card';

const Product = () => {
  const id = useParams();
  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState({});
  const [quantity, setQuantity] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true);
      const fetchedProduct = await getOne(id.id);
      if (fetchedProduct) {
        setProductData(fetchedProduct);
        setLoading(false);
      }
    };
    getProduct();
  }, [id]);

  if (loading) return <div>Loading ...</div>;

  return (
    // <div>
    //   <div className='row m-0'>
    //     <div className="col-6">
    //         <img src={productData.image} width={'100%'} alt={productData.id} />
    //     </div>
    //     <div className="col-6">
    //         <h1>{productData.title}</h1>
    //         <p>Price: {productData.price}$</p>
    //         <p>{productData.description}</p>
    //         <br />
    //         <br />
    //         <input min="1" type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
    //         <p>Total: {quantity * productData.price}</p>
    //         <button className="btn btn-primary" onClick={() => dispatch(addToCart(productData, quantity))}>
    //             Add To Cart
    //         </button>
    //     </div>
    //   </div>
    // </div>

    <Card style={{ width: "18rem" }}>
      <Card.Img variant="top" src={productData.image} alt={productData.id} width={'100%'} />
      <Card.Body>
        <Card.Title>{productData.title}</Card.Title>
        <p>Price: {productData.price}$</p>
        <Card.Text>{productData.description}</Card.Text>
        <input min="1" type="number" value={quantity} onChange={e => setQuantity(e.target.value)} />
        <p>Total: {quantity * productData.price}</p>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(addToCart(productData, quantity))}
        >
          Add To Cart
        </button>
      </Card.Body>
    </Card>
  );
};

export default Product;
