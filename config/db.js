import mongoose from "mongoose";

const connectDB = async () => {
  try {
    const connection = await mongoose.connect(process.env.MONGO_URL);
    console.log(`Connected To Mongodb Database ${connection.connection.host}`);
  } catch (error) {
    console.log(`Error in MongoDB: ${error.message}`);
  }
};

export default connectDB;
