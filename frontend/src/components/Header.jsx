import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/images/logo.png";
import styles from "../assets/styles/Custom.module.css";
import { useLogoutMutation } from "../slices/usersApiSlice";
import { logout } from "../slices/authSlice";
//We are using bootstrap to import some basic structure contatiners
import { Navbar, Nav, Container, Badge, NavDropdown } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaHeadset, FaTh } from "react-icons/fa";

//This will be the Header/Navbar component of the page
const Header = () => {
  //This slector helps us select anything made from the state.cart in the cartSlice file
  const { cartItems } = useSelector((state) => state.cart);
  const { userInfo } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [logoutApiCall] = useLogoutMutation();

  const logoutHandler = async () => {
    try {
      await logoutApiCall().unwrap();
      dispatch(logout());
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <header>
      {/* This is where the navbar component coming from bootstap */}
      <Navbar
        className={styles.navBar}
        bg="dark"
        variant="dark"
        expand="md"
        collapseOnSelect
      >
        {/* We have this container so the child elemnts inside the nav bar do not stretch out of the Nav container  */}
        <Container>
          <LinkContainer to="/" className={styles.brandTitle}>
            <Navbar.Brand>
              <img className={styles.logo} src={logo} alt="logo" />
              Solar Star Power
            </Navbar.Brand>
          </LinkContainer>
          {/* This component represents the brand or logo of the navigation bar. It typically contains a link that defines the destination when clicked */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          {/* This component represents a toggle button that controls the collapsing and expanding behavior of the navigation bar. */}
          <Navbar.Collapse id="basic-navbar-nav">
            {/* This component represents the collapsible content of the navigation bar. */}
            <Nav className="ms-auto">
              {/* These compnents are where the links are located on the Nav*/}
              <LinkContainer to="/all-products">
                <Nav.Link>
                  <div>
                    <FaTh />
                    Products
                  </div>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/cart">
                <Nav.Link>
                  <div>
                    <FaShoppingCart />
                    Cart
                    {/* This is where it will show the number of items added to your cart */}
                    {cartItems.length > 0 && (
                      <Badge pill bg="info" style={{ marginLeft: "5px" }}>
                        {cartItems.reduce((a, c) => a + c.qty, 0)}
                      </Badge>
                    )}
                  </div>
                </Nav.Link>
              </LinkContainer>
              <LinkContainer to="/contact">
                <Nav.Link>
                  <div>
                    <FaHeadset />
                    Contact Us
                  </div>
                </Nav.Link>
              </LinkContainer>
              {userInfo ? (
                <NavDropdown title={userInfo.name} id="username">
                  <LinkContainer to="/profile">
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={logoutHandler}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <LinkContainer to="/login">
                  <Nav.Link>
                    <div>
                      <FaUser />
                      Sign In
                    </div>
                  </Nav.Link>
                </LinkContainer>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
