//The reason this looks cleaner is cause we wrote most of the logic in the controller js file

import express from "express";
const router = express.Router();
import {
  getProducts,
  getProductById,
  getTopProducts,
  getAllProducts,
} from "../controllers/productController.js";

router.route("/").get(getProducts);
router.route("/all-products").get(getAllProducts);
router.get("/top", getTopProducts);
router.route("/:id").get(getProductById);

export default router;

//Orginal Written Code w/o a Controller FILE
// router.get(
//   "/",
//   asyncHandler(async (req, res) => {
//     //This will pull the entire product object and store in another object
//     const products = await Product.find({});
//     res.json(products);
//   })
// );

// router.get(
//   "/:id",
//   asyncHandler(async (req, res) => {
//     //This function works just to find one specfic product using the id and the url(params)
//     const product = await Product.findById(req.params.id);

//     if (product) {
//       res.json(product);
//     } else {
//       res.status(404);
//       throw new Error("Resource not found");
//     }
//   })
// );
