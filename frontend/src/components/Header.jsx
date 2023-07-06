import React from 'react'
//We are using bootstrap to import some basic structure contatiners
import {Navbar, Nav, Container} from 'react-bootstrap'
import {FaShoppingCart, FaUser} from 'react-icons/fa'
import logo from '../assets/logo.png'
import styles from '../assets/styles/Custom.module.css'


//This will be the Header/Navbar component of the page 
const Header = () => {
  return (
    <header>
      {/* This is where the navbar component coming from bootstap */}
      <Navbar bg="dark" variant="dark" expand="md" collapseOnSelect>
        {/* We have this container so the child elemnts inside the nav bar do not stretch out of the Nav container  */}
        <Container>
          <Navbar.Brand href="/">
          <img className={styles.logo} src={logo} alt="logo"/>
            Solar Star Power
          </Navbar.Brand>                                               {/* This component represents the brand or logo of the navigation bar. It typically contains a link that defines the destination when clicked */}
          <Navbar.Toggle aria-controls="basic-navbar-nav" />            {/* This component represents a toggle button that controls the collapsing and expanding behavior of the navigation bar. */}
          <Navbar.Collapse id="basic-navbar-nav">                       {/* This component represents the collapsible content of the navigation bar. */}
            <Nav className='ms-auto'>
            <Nav.Link href="/cart"><FaShoppingCart/>Cart</Nav.Link>       {/* These compnents are where the links are located on the Nav*/}  
            <Nav.Link href="/login"><FaUser/>Sign In</Nav.Link>           {/* We also have Icons being used from the React-Icon packeges that are downloaded with the reacticon npm package*/}
            </Nav>
          </Navbar.Collapse> 
        </Container>
      </Navbar>
    </header>
  );
}

export default Header