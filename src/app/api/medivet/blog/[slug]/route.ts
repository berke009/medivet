import { getMedivetBlogPost } from "@/lib/medivet/blog-posts";

type RouteContext = { params: Promise<{ slug: string }> };

export async function GET(_req: Request, ctx: RouteContext) {
  const { slug } = await ctx.params;
  const post = await getMedivetBlogPost(slug);
  if (!post) {
    return Response.json({ error: "Not found" }, { status: 404 });
  }
  return Response.json({ post });
}
