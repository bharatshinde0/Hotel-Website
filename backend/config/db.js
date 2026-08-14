import mongoose from "mongoose";

export const connectDB = async () => {
  const uri = process.env.MONGO_URI;

  if (!uri) {
    console.log("MongoDB URI not provided. API will use in-memory storage.");
    return false;
  }

  try {
    await mongoose.connect(uri);
    console.log("MongoDB connected");
    return true;
  } catch (error) {
    console.log("MongoDB connection failed. API will use in-memory storage.");
    console.log(error.message);
    return false;
  }
};
