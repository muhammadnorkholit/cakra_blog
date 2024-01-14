import connectMongoDB from "@/lib/mongodb";
import Categories from "@/models/Categories";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  const { name, slug, icon, sequence } = await req.json();
  try {
    await connectMongoDB();
    let categori = await Categories.create({
      name,
      slug,
      icon,
      sequence,
    });
    return NextResponse.json({
      status: 201,
      message: "Success",
      data: categori,
      error: null,
    });
  } catch (error) {
    return NextResponse.json({ status: 500, message: "error", error });
  }
}

export async function GET(req: Request) {
  try {
    await connectMongoDB();
    let categoris = await Categories.find().sort({ sequence: 1 });
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
  const { id, name, slug, icon, sequence } = await req.json();
  try {
    await connectMongoDB();
    let updatedCategory = await Categories.findByIdAndUpdate(
      id,
      {
        name,
        slug,
        icon,
        sequence,
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
    let deletedCategory = await Categories.findByIdAndDelete(id);
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
