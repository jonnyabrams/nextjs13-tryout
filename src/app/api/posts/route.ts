import { NextRequest, NextResponse } from "next/server";

import connect from "@/src/utils/db";
import Post from "@/src/models/Post";

export const GET = async (req: NextRequest) => {
  try {
    await connect();

    const posts = await Post.find();

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
