import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";
import HomeScreen from "./pages/HomeScreen";

//Arrow Function Component
const App = () => {
  return (
    <>
      <Header />
      <main className="py-3">
        {/*py-3 means padding in the y-axis (Top and Bottom)*/}
        <Container>
          <HomeScreen/>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
