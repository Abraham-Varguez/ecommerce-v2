import React from 'react'
import {Card} from "react-bootstrap"
import styles from "../assets/styles/Custom.module.css"


//This is where we will render thr HTML and get the Product information as well
const Product = ({product}) => {
  return (
    <Card className="my-3 p-3 rounded">
      <a href={`/product/${product._id}`}>
        <Card.Img className={styles.productImg} src={product.image} variant="top" />
      </a>
      <Card.Body>
        <a href={`/product/${product._id}`}>
            <Card.Title as ="div"> 
            <strong>{product.name}</strong>
            </Card.Title>
        </a>

        <Card.Text as="h3">
            ${product.price}
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default Product``