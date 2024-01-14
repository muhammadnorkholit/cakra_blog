import mongoose, { Schema } from "mongoose";

const Posts = new Schema(
  {
    name: String,
    slug: String,
    icon: String,
    sequence: Number,
  },
  {
    timestamps: true,
  }
);
export default mongoose.models.categories ||
  mongoose.model("categories", Posts);
