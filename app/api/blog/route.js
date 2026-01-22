import { NextResponse } from "next/server";
import { connectDB } from "../../../lib/configuration/db";
import BlogModel from "../../../lib/models/BlogModel";

const loadDB = async () => {
  await connectDB();
};

loadDB();

export async function GET(request) {
  return NextResponse.json({
    message: "api working fine",
  });
}

export async function POST(request) {
  const fromData = await request.fromData();
  const timestamp = Date.now();
  const image = fromData.get("image");
  const imageByteData = await image.arrayBuffer();
  const buffer = Buffer.from(imageByteData);
  const path = `./public/images/${timestamp}-${image.name}`;
  await writeFile(path, buffer);

  const imageUrl = `/images/${timestamp}-${image.name}`;
  const blogData = {
    title: fromData.get("title"),
    description: fromData.get("description"),
    country: fromData.get("country"),
    imageUrl: imageUrl,
    author: fromData.get("author"),
    authorImage: fromData.get("authorImage"),
    date: new Date(),
  };

  await BlogModel.create(blogData);

  return NextResponse.json({
    success: true,
    message: "Blog created successfully",
  });
}
