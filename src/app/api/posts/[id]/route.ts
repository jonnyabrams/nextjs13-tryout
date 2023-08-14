import { NextRequest, NextResponse } from "next/server";

import connect from "@/src/utils/db";
import Post from "@/src/models/Post";

export const GET = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    await connect();

    const post = await Post.findById(id);

    return new NextResponse(JSON.stringify(post), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

export const DELETE = async (
  req: NextRequest,
  { params }: { params: { id: string } }
) => {
  const { id } = params;

  try {
    await connect();

    await Post.findByIdAndDelete(id);

    return new NextResponse("Post successfully deleted", { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};