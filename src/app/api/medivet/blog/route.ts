import { listMedivetBlogPosts } from "@/lib/medivet/blog-posts";

export async function GET() {
  const posts = await listMedivetBlogPosts();
  return Response.json({ posts });
}
