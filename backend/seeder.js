//This is a file that seeds all of our data
import mongoose from "mongoose";
import dotenv from "dotenv";
import colors from "colors";
import users from "./data/users.js";
import products from "./data/products.js";
import User from "./models/userModel.js";
import Product from "./models/productModel.js";
import Order from "./models/orderModel.js";
import connectDB from "./config/db.js";

dotenv.config();

connectDB();

//Creates (imports) the Data
const importData = async () => {
  try {
    //This will reset all the data records from the Model
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    //This will the array of user from the users.js file
    //**We get the User**
    const createdUsers = await User.insertMany(users);

    //**Get the User ID**
    const adminUser = createdUsers[0]._id;

    //This will return the products from product.js file (We use the spread operator to make sure to return the whole product object)
    //**Grab the products from the user using the User ID**
    //********************** THIS IS WHERE I HAD MY FIRst BIGGEST MISTAKE ****************************
    const sampleProducts = products.map((product) => {
      return { ...product, user: adminUser };
    });
    // console.log(sampleProducts);
    //**This will add all the data that we collected above and insert it into the Prodcut Model Schema**
    await Product.insertMany(sampleProducts);

    //Will be logged if successful
    console.log("Data Imported".green.inverse);
    process.exit();
  } catch (error) {
    console.log(`${error}`.red.inverse);
    process.exit(1);
  }
};

//Deletes the Data
const destroyData = async () => {
  try {
    await Order.deleteMany();
    await Product.deleteMany();
    await User.deleteMany();

    console.log("Data Destroyed!".red.inverse);
    process.exit();
  } catch (error) {
    console.error(`${error}`.red.inverse);
    process.exit(1);
  }
};

if (process.argv[2] === "-d") {
  destroyData();
} else {
  importData();
}
