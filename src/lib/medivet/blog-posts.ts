import { readdir, readFile } from "fs/promises";
import path from "path";

export type MedivetBlogPost = {
  slug: string;
  title: string;
  publishedAt: string;
  summary?: string;
  body: string;
};

const BLOG_DIR = path.join(process.cwd(), "content/medivet-blog");

export async function listMedivetBlogPosts(): Promise<
  Pick<MedivetBlogPost, "slug" | "title" | "publishedAt" | "summary">[]
> {
  let names: string[];
  try {
    names = await readdir(BLOG_DIR);
  } catch {
    return [];
  }
  const jsonFiles = names.filter((n) => n.endsWith(".json"));
  const posts: Pick<
    MedivetBlogPost,
    "slug" | "title" | "publishedAt" | "summary"
  >[] = [];
  for (const file of jsonFiles) {
    const raw = await readFile(path.join(BLOG_DIR, file), "utf8");
    const parsed = JSON.parse(raw) as MedivetBlogPost;
    posts.push({
      slug: parsed.slug,
      title: parsed.title,
      publishedAt: parsed.publishedAt,
      summary: parsed.summary,
    });
  }
  posts.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));
  return posts;
}

export async function getMedivetBlogPost(
  slug: string,
): Promise<MedivetBlogPost | null> {
  const safe = slug.replace(/[^a-z0-9-]/gi, "");
  if (safe !== slug || !safe) return null;
  try {
    const raw = await readFile(
      path.join(BLOG_DIR, `${safe}.json`),
      "utf8",
    );
    return JSON.parse(raw) as MedivetBlogPost;
  } catch {
    return null;
  }
}
