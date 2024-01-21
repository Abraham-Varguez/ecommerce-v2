import { Link, useNavigate } from "react-router-dom";
import React from "react";
import {
  Row,
  Col,
  ListGroup,
  Image,
  Form,
  Button,
  Card,
  ListGroupItem,
} from "react-bootstrap";
import { FaTrash } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../slices/cartSlice";

const CartScreen = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const cart = useSelector((state) => {
    return state.cart;
  });
  const { cartItems } = cart;

  //redirect to shipping page or login page if not logged in
  const checkoutHandler = () => {
    navigate("/login?redirect=/shipping");
  };

  //Update the qty of a product already in the cart
  const addToCartHandler = async (product, qty) => {
    //Is updating the prodcut and the qty of the car
    //we use the spread operator because we still want to show the current items in the array
    dispatch(addToCart({ ...product, qty }));
  };

  //Removes selected product inside the cart
  const removeFromCartHandler = async (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <Row>
      <Col md={8}>
        <h1 style={{ marginBottom: "20px" }}>Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Row>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
              }}
            >
              <h3>Your Cart is Empty </h3>
              <Link className="btn btn-light my-3" to="/">
                Go back
              </Link>
            </div>
          </Row>
        ) : (
          <ListGroup variant="flush">
            {cartItems.map((item) => (
              <ListGroup.Item key={item._id}>
                <Row>
                  <Col md={2}>
                    <Image src={item.image} alt={item.name} fluid rounded />
                  </Col>
                  <Col md={3} style={{ margin: "auto" }}>
                    <Link to={`/product/${item._id}`}>{item.name}</Link>
                  </Col>
                  <Col md={2} style={{ margin: "auto" }}>
                    ${item.price}
                  </Col>
                  <Col md={2} style={{ margin: "auto" }}>
                    <Form.Control
                      as="select"
                      value={item.qty}
                      onChange={(e) =>
                        addToCartHandler(item, Number(e.target.value))
                      }
                    >
                      {/* This array is creating a length based on the stock qty for the prodcut and the .keys will use to create the number based on the indexes of the array */}
                      {[...Array(item.countInStock).keys()].map((x) => (
                        <option key={x + 1} value={x + 1}>
                          {x + 1}
                        </option>
                      ))}
                    </Form.Control>
                  </Col>
                  <Col md={2} style={{ margin: "auto" }}>
                    <Button
                      type="button"
                      variant="light"
                      onClick={() => removeFromCartHandler(item._id)}
                    >
                      <FaTrash style={{ margin: "0" }} />
                    </Button>
                  </Col>
                </Row>
              </ListGroup.Item>
            ))}
          </ListGroup>
        )}
      </Col>
      <Col md={4}>
        <Card className="bg-transparent">
          <ListGroup variant="flush">
            <ListGroup.Item>
              <h2>
                Subtotal ({cartItems.reduce((acc, item) => acc + item.qty, 0)})
                Items
              </h2>
              <h3>
                $
                {cartItems
                  .reduce((acc, item) => acc + item.qty * item.price, 0)
                  .toFixed(2)}
              </h3>
            </ListGroup.Item>
            <ListGroupItem>
              <Button
                type="button"
                className="btn-block"
                disabled={cartItems.length === 0}
                onClick={() => checkoutHandler()}
              >
                Proceed to Checkout
              </Button>
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    </Row>
  );
};

export default CartScreen;
