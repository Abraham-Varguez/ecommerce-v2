//CommonJS Type
// const express = require('express')

//ES6 Module Type
import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
dotenv.config();
import { notFound, errorHandler } from "./middleware/errorMiddleware.js";
import prodcutRoutes from "./routes/productRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import connectDB from "./config/db.js";
const port = process.env.PORT || 9002;
connectDB(); //Connect to MongoDB Database Server
const app = express();
//Body Parser Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Cookir Parser Middleware
app.use(cookieParser())

app.use("/api/products", prodcutRoutes);
app.use("/api/users", userRoutes);

app.use(notFound);
app.use(errorHandler);

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(port, () => console.log(`Server running on port ${port}`));
