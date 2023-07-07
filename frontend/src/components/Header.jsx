import React from "react";
//We are using bootstrap to import some basic structure contatiners
import { Navbar, Nav, Container } from "react-bootstrap";
import { FaShoppingCart, FaUser, FaHeadset, FaTh } from "react-icons/fa";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../assets/images/logo.png";
import styles from "../assets/styles/Custom.module.css";

//This will be the Header/Navbar component of the page
const Header = () => {
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
          </LinkContainer>{" "}
          {/* This component represents the brand or logo of the navigation bar. It typically contains a link that defines the destination when clicked */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />{" "}
          {/* This component represents a toggle button that controls the collapsing and expanding behavior of the navigation bar. */}
          <Navbar.Collapse id="basic-navbar-nav">
            {" "}
            {/* This component represents the collapsible content of the navigation bar. */}
            <Nav className="ms-auto">
              <LinkContainer to="/cart">
                <Nav.Link>
                  <div>
                    <FaShoppingCart />
                    Cart
                  </div>
                </Nav.Link>
              </LinkContainer>
              {/* These compnents are where the links are located on the Nav*/}
              <LinkContainer to="/login">
                <Nav.Link>
                  <div>
                    <FaUser />
                    Sign In
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
              <LinkContainer to="/all-products">
                <Nav.Link>
                  <div>
                    <FaTh />
                    Products
                  </div>
                </Nav.Link>
              </LinkContainer>
              {/* We also have Icons being used from the React-Icon packeges that are downloaded with the reacticon npm package*/}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Header;
