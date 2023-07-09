//This file and folder helps to keep the functionality in one spot
//It help to keep an orgranized file structure
//and in my opinion helps you write clean and readable code

import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";



// @description Fetch all Products
// @Routes GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  //This will pull the entire product object and store in another object
  const products = await Product.find({});
  res.json(products);
});

// @description Fetch a single Product
// @Routes GET /api/products/:id
// @access Public
const getProductById = asyncHandler(async (req, res) => {
  //This function works just to find one specfic product using the id and the url(params)
  const product = await Product.findById(req.params.id);

  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error("Resource not found");
  }
});

export { getProducts, getProductById };
