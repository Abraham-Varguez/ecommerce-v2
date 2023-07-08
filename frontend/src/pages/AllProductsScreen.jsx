import { useEffect, useState } from "react";
import axios from "axios";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import styles from "../assets/styles/Custom.module.css";

const AllProductsScreen = () => {
  //The usestate will be the base on how we can use the product variable in out html rendering
  const [products, setProducts] = useState([]);

  //We use useEffect to help receive any information from the backend
  useEffect(() => {
    //This function will now get the product information from the backend using async await
    const fetchProducts = async () => {
      const { data } = await axios.get("/api/products");
      setProducts(data);
    };
    fetchProducts();
  }, []);
  return (
    <>
      <div className="p-3">
        <h1 className={styles.prodTitle}>Solar Products</h1>
        <Row>
          {/* In this arrayy map we are looping through the products array in the imoprted js file and were rendering the HTML  */}
          {products.map((product) => (
            <Col key={product._id} sm={12} md={6} lg={4}>
              <Product product={product} />
            </Col>
          ))}
        </Row>
      </div>
    </>
  );
};

export default AllProductsScreen;
