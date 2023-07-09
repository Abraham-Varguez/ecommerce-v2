import mongoose from "mongoose";

//Anything from mongoose will be returned as a promise
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Error: ${error.message}`);
    //This help stop the connection process in case there is a huge error that crashes the servers
    proccess.exit(1);
  }
};

export default connectDB;
