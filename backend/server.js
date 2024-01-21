//CommonJS Type
// const express = require('express')

//ES6 Module Type
import express from "express";
import path from 'path'
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
app.use(cookieParser());

app.use("/api/products", prodcutRoutes);
app.use("/api/users", userRoutes);

const __dirname = path.resolve();

console.log(process.env.NODE_ENV)

if (process.env.NODE_ENV === "production") {
  //Set static folder

  app.use(express.static(path.join(__dirname, "/frontend/build")));

  //any route that is not api will be redirected to index.html
  app.get("*", (req, res) =>
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => {
    res.send("API is running...");
  });
}

app.use(notFound);
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port ${port}`));
