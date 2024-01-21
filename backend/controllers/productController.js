//This file and folder helps to keep the functionality in one spot AKA the MiddleWare
//It help to keep an orgranized file structure
//and in my opinion helps you write clean and readable code
//For the PRODUCTS
import asyncHandler from "../middleware/asyncHandler.js";
import Product from "../models/productModel.js";

// @description Fetch 3 Products
// @Routes GET /api/products
// @access Public
const getProducts = asyncHandler(async (req, res) => {
  const pageSize = 3;
  const page = Number(req.query.pageNumber) || 1;
  const count = await Product.countDocuments();
  //This will pull the entire product object and store in another object
  const products = await Product.find({})
    .limit(pageSize)
    .skip(pageSize * (page - 1));
  res.json({ products, page, pages: Math.ceil(count / pageSize) });
});

// @description Fetch all Products
// @Routes GET /api/all-products
// @access Public
const getAllProducts = asyncHandler(async (req, res) => {
  //This will pull the entire product object and store in another object
  const products = await Product.find({});
  res.json(products)
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

// @description Top rated Product
// @Routes GET /api/products/top
// @access Public
const getTopProducts = asyncHandler(async (req, res) => {
  //This function works just to find one specfic product using the id and the url(params)
  const product = await Product.find({}).sort({ rating: -1 }).limit(3);
  res.status(200).json(product);
});

export { getProducts, getProductById, getTopProducts, getAllProducts};
