import { useGetAllProductsQuery } from "../slices/prodcutsApiSlice";
import { useState } from "react";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import Slider from "../components/Slider";
import styles from "../assets/styles/Custom.module.css";

const AllProductsScreen = () => {
  //UseState to set the Price filter range
  const [priceRange, setPriceRange] = useState([0, 3800]);
  const { data: products, isLoading, error } = useGetAllProductsQuery();

  const sliderChangeHandler = (newRange) => {
    setPriceRange(newRange);
  };

  //Function that filter the price ranges
  const filteredProducts = products
    ? products.filter((product) => {
        console.log(product.price);
        return product.price >= priceRange[0] && product.price <= priceRange[1];
      })
    : [];

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
          <div className="p-3">
            <h1 className={styles.prodTitle}>Solar Products</h1>
            <Col className={styles.slider}>
              <Slider onChange={sliderChangeHandler} />
            </Col>
            <Row>
              {/* In this arrayy map we are looping through the products array in the imoprted js file and were rendering the HTML  */}
              {filteredProducts.map((product) => (
                <Col key={product._id} sm={12} md={6} lg={4}>
                  <Product product={product} />
                </Col>
              ))}
            </Row>
          </div>
        </>
      )}
    </>
  );
};

export default AllProductsScreen;
