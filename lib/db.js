import mongoose from "mongoose";

export async function connectMongo() {
  if (mongoose.connection.readyState === 1) return;
  await mongoose.connect(process.env.MONGODB_URI);
}

const blogSchema = new mongoose.Schema({
  url: String,
  fullText: String,
});

export const Blog = mongoose.models.Blog || mongoose.model("Blog", blogSchema);
