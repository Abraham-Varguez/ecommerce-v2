import React from "react";
import { Container } from "react-bootstrap";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//Arrow Function Component
const App = () => {
  return (
    <>
      <Header />
      <main className="py-5 home-bg">
        {/*py-3 means padding in the y-axis (Top and Bottom)*/}
        <Container>
          <Outlet />
        </Container>
      </main>
      <Footer />
      <ToastContainer/>
    </>
  );
};

export default App;
