import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcryptjs";

import connect from "@/src/utils/db";
import User from "@/src/models/User";

export const POST = async (req: NextRequest) => {
  const { name, email, password } = await req.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 10);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
  });

  try {
    await newUser.save();

    return new NextResponse("User successfully created", {
      status: 201,
    });
  } catch (error: any) {
    return new NextResponse(error.message, {
      status: 500,
    });
  }
};
