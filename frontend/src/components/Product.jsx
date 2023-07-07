import React from "react";
import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";
import styles from "../assets/styles/Custom.module.css";
import Rating from "./Rating";

//This is where we will render thr HTML and get the Product information as well
const Product = ({ product }) => {
  return (
    <Card className="bg-dark text-light my-4 p-3 rounded">
      {/* Image of Product  */}
      <Link to={`/product/${product._id}`}>
        <Card.Img
          className={styles.productImg}
          src={product.image}
          variant="top"
        />
      </Link>
      <Card.Body>
        {/* Title name of product  */}
        <Link to={`/product/${product._id}`}>
          <Card.Title as="div" className={styles.productTitle}>
            <strong>{product.name}</strong>
          </Card.Title>
        </Link>
        <Card.Text as="div">
          <Rating
            value={product.rating}
            text={`${product.numReviews} Reviews`}
          />
        </Card.Text>

        <Card.Text as="h3">${product.price}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default Product;
