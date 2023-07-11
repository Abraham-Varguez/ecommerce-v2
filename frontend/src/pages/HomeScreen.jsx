// import { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
//This will replace the useState and useEffect and now all will be mongoDB data will be fetched using slices with Redux
import { useGetProductsQuery } from "../slices/prodcutsApiSlice";
import Product from "../components/Product";
import Loader from "../components/Loader";
import Message from "../components/Message";
import styles from "../assets/styles/Custom.module.css";
// import axios from "axios";

const HomeScreen = () => {
  // //The usestate will be the base on how we can use the product variable in out html rendering
  // const [products, setProducts] = useState([]);

  // //We use useEffect to help receive any information from the backend
  // useEffect(() => {
  //   //This function will now get the product information from the backend using async await
  //   const fetchProducts = async () => {
  //     const { data } = await axios.get("/api/products");
  //     setProducts(data);
  //   };
  //   fetchProducts();
  // }, []);

  const { data: products, isLoading, error } = useGetProductsQuery();

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">
          {error?.data?.message || error.error}
        </Message>
      ) : (
        <>
          <div className={styles.homeBG}>
            <h1>Latest Products</h1>
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
      )}
    </>
    // <>
    //       // <div className={styles.homeBG}>
    //       //   <h1>Latest Products</h1>
    //       //   <Row>
    //       //     {/* In this arrayy map we are looping through the products array in the imoprted js file and were rendering the HTML  */}
    //       //     {products.map((product) => (
    //       //       <Col key={product._id} sm={12} md={6} lg={4}>
    //       //         <Product product={product} />
    //       //       </Col>
    //       //     ))}
    //       //   </Row>
    // </>
  );
};

export default HomeScreen;
