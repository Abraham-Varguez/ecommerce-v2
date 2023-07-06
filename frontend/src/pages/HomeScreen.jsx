import React from "react";
import { Row, Col } from "react-bootstrap";
import products from "../products";
import Product from '../components/Product'

const HomeScreen = () => {
  return (
    <>
      <h1>Latest Products</h1>
      <Row>
        {/* In this arrayy map we are looping through the products array in the imoprted js file and were rendering the HTML  */}
        {products.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4}>
            <Product product={product}/>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
