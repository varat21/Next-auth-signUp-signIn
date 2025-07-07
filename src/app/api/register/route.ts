// app/api/register/route.ts
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import mongoose from "mongoose";
import User from "@/model/User";

async function connectMongoDB() {
  try {
    // Check if already connected to avoid multiple connections
    if (mongoose.connection.readyState >= 1) {
      return;
    }

    // Connect to MongoDB using the connection string from environment variables
    await mongoose.connect(process.env.MONGODB_URI as string, {
      // Remove deprecated options
    });
    // console.log("Connected to MongoDB");
  } catch (error) {
    // console.error("MongoDB connection error:", error);
    throw new Error("Failed to connect to MongoDB");
  }
}

export async function POST(req: any) {
  try {
    const { name, email, password } = await req.json();

    // Validate input
    if (!name || !email || !password) {
      return NextResponse.json(
        { message: "Missing required fields" },
        { status: 400 }
      );
    }

    // Connect to MongoDB
    await connectMongoDB();

    // Check if user already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: "User with this email already exists" },
        { status: 400 }
      );
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create new user
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json(
      { message: "User registered successfully" },
      { status: 201 }
    );
  } catch (err) {
    console.error("Error registering user:", err);
    return NextResponse.json(
      { message: "An error occurred while registering user" },
      { status: 500 }
    );
  }
}