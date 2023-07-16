import { useGetAllProductsQuery } from "../slices/prodcutsApiSlice";
import Loader from "../components/Loader";
import Message from "../components/Message";
import { Row, Col } from "react-bootstrap";
import Product from "../components/Product";
import styles from "../assets/styles/Custom.module.css";

const AllProductsScreen = () => {
  const { data: products, isLoading, error } = useGetAllProductsQuery();

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
  );
};

export default AllProductsScreen;
