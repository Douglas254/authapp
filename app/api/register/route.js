import { connectMongoDB } from "@/lib/mongodb";
import User from "@/models/user";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(req) {
  try {
    const { name, email, password } = await req.json();
    const hashedPassword = await bcrypt.hash(password, 10);

    // connect to MongoDB and store the data
    await connectMongoDB();
    // store data to the database
    await User.create({ name, email, password: hashedPassword });

    return NextResponse.json({ message: "User registered" }, { status: 201 });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      { message: "An error occured while registering the user" },
      { status: 500 }
    );
  }
}
