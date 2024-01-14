import mongoose from "mongoose";

const connectMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URL || "");
    console.log("Succesfuly Connect to mongodb");
  } catch (error) {
    console.log("failed to connect");
  }
};

export default connectMongoDB;
