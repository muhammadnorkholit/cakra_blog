import mongoose, { Schema } from "mongoose";

const Posts = new Schema(
  {
    title: String,
    slug: String,
    categori_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "categories",
    },
    desc: String,
    content: String,
    imageUrl: String,
    imageKey: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.models.posts || mongoose.model("posts", Posts);
