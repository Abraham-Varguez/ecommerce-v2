import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
//This import is where I will add my custom CSS
import "./assets/styles/index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
//Route Imports
import HomeScreen from "./pages/HomeScreen";
import ProductScreen from "./pages/ProductScreen";
import AllProductsScreen from "./pages/AllProductsScreen";
import ContactScreen from "./pages/ContactScreen";

//This is where we create our pages or 'Routers'
const router = createBrowserRouter(
  createRoutesFromElements(
    // The "/" will be the first page (root) loaded with the App compnenet being the root
    <Route path="/" element={<App />}>
      <Route index={true} path="/" element={<HomeScreen />} />
      <Route path="/product/:id" element={<ProductScreen />} />
      <Route path="/contact" element={<ContactScreen />} />
      <Route path="/all-products" element={<AllProductsScreen />} />
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* This is whar the index will look like for now on since we are using Routes tpo create the pages now  */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

reportWebVitals();
