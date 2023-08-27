import React, { useEffect, useState } from "react";
import ProductItem from "../components/ProductItem";
import { getAll } from "../api/products";
import { Col, Container, Row } from "react-bootstrap";

const Products = () => {
  const [allProducts, setAllProducts] = useState([]);

  useEffect(() => {
    const getAllProduct = async () => {
      const fetchedProducts = await getAll();
      setAllProducts(await fetchedProducts);
      console.log("fetchedProducts");
      console.log(fetchedProducts);
    };
    getAllProduct();
  }, []);

  return (
    <Container fluid>
      <h1>Products</h1>
      <Row>
        {allProducts.map((product) => (
          <Col key={product.id}>
            <ProductItem title={product.title} image={product.image} price={product.price} id={product.id} />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Products;
