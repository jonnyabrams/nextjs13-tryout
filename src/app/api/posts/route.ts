import { NextRequest, NextResponse } from "next/server";

import connect from "@/src/utils/db";
import Post from "@/src/models/Post";

export const GET = async (req: NextRequest) => {
  const url = new URL(req.url);

  const username = url.searchParams.get("username");

  try {
    await connect();

    // for ts - this way, eventual query for Post.find can be empty or a username
    let query: any = {};

    if (username) {
      query = { username };
    }

    const posts = await Post.find(query);

    return new NextResponse(JSON.stringify(posts), { status: 200 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};

export const POST = async (req: NextRequest) => {
  const body = await req.json();

  const newPost = new Post(body);

  try {
    await connect();

    await newPost.save();

    return new NextResponse("Successfully posted!", { status: 201 });
  } catch (error) {
    return new NextResponse("Database error", { status: 500 });
  }
};
