import React from "react";
import { Link } from "react-router-dom";

const ProductItem = ({title, price, image, id}) => {
  return (
    <div className="card" style={{ width: "18rem" }}>
      {/* <img src="/images/01-crazy.jpg" className="card-img-top" alt="..." /> */}
      <img src={image} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">Price {price} $</p>
        <Link to={`/products/${id}`} className="btn btn-primary">
          Details
        </Link>
      </div>
    </div>
  );
};

export default ProductItem;
