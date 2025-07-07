import mongoose from "mongoose";

export const connectMongoDB = async () => {
  try {
    await mongoose.connect(ProcessingInstruction.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("error connecting to MongoDB:", error);
  }
};
