import connectMongoDB from "@/lib/mongodb";
import Posts from "@/models/Posts";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { title, desc, slug, content, imageUrl, categori_id, imageKey } =
    await req.json();
  try {
    await connectMongoDB();
    let categori = await Posts.create({
      title,
      desc,
      slug,
      content,
      imageUrl,
      imageKey,
      categori_id,
    });
    return NextResponse.json({
      status: 201,
      message: "Success",
      data: categori,
      error: null,
    });
    console.log("success");
  } catch (error) {
    console.log(error);

    return NextResponse.json({ status: 500, message: "error", error });
  }
}

export async function GET(req: Request) {
  try {
    await connectMongoDB();
    let categoris = await Posts.find().sort({ sequence: 1 });
    return NextResponse.json({
      status: 200,
      message: "Success",
      data: categoris,
      error: null,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "error", error });
  }
}

export async function PUT(req: Request) {
  const { title, desc, slug, content, imageUrl, categori_id, id, imageKey } =
    await req.json();
  try {
    await connectMongoDB();
    let updatedCategory = await Posts.findByIdAndUpdate(
      id,
      {
        title,
        desc,
        slug,
        content,
        imageUrl,
        categori_id,
        imageKey,
      },
      { new: true }
    );
    return NextResponse.json({
      status: 200,
      message: "Success",
      data: updatedCategory,
      error: null,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "error", error });
  }
}

export async function DELETE(req: Request) {
  const { id } = await req.json();
  try {
    await connectMongoDB();
    let deletedCategory = await Posts.findByIdAndDelete(id);
    return NextResponse.json({
      status: 200,
      message: "Success",
      data: deletedCategory,
      error: null,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "error", error });
  }
}
