import { NextResponse } from "next/server";
import mongoose from "mongoose";
import User from "@/model/User";

async function connectMongoDB() {
  try {
    if (mongoose.connection.readyState >= 1) {
      return;
    }
    await mongoose.connect(process.env.MONGODB_URI as string);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}

export async function POST(req: Request) {
  try {
    // Connect to MongoDB
    await connectMongoDB();

    // Parse the request body safely
    let body;
    try {
      body = await req.json();
    } catch (error) {
      console.error("Invalid JSON in request body:", error);
      return NextResponse.json(
        { message: "Invalid JSON format in request body" },
        { status: 400 }
      );
    }

    // Validate email field
    const { email } = body;
    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { message: "Email is required and must be a string" },
        { status: 400 }
      );
    }

    // Find user by email and select the _id field
    const user = await User.findOne({ email }).select("_id");

    // Check if user exists
    if (!user) {
      return NextResponse.json({ message: "User not found" }, { status: 404 });
    }

    // Return the user data
    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Error in POST /api/userExist:", error);
    return NextResponse.json(
      { message: "Internal server error" },
      { status: 500 }
    );
  }
}