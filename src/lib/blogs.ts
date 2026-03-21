import { cache } from "react";
import { promises as fs } from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import readingTime from "reading-time";

const CONTENT_DIR = path.join(process.cwd(), "src", "content");

type BlogFrontmatter = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  draft?: boolean;
};

export type Blog = BlogFrontmatter & {
  slug: string;
  content: string;
  readingTime: ReturnType<typeof readingTime>;
};

async function getBlogFiles(dir: string): Promise<string[]> {
  const entries = await fs.readdir(dir, { withFileTypes: true });
  const files = await Promise.all(
    entries.map(async (entry) => {
      const fullPath = path.join(dir, entry.name);

      if (entry.isDirectory()) {
        return getBlogFiles(fullPath);
      }

      return entry.name.endsWith(".mdx") ? [fullPath] : [];
    }),
  );

  return files.flat();
}

function getSlug(filePath: string) {
  return path
    .relative(CONTENT_DIR, filePath)
    .replace(/\\/g, "/")
    .replace(/\.mdx$/, "");
}

async function readBlog(filePath: string): Promise<Blog> {
  const source = await fs.readFile(filePath, "utf8");
  const { data, content } = matter(source);
  const frontmatter = data as Partial<BlogFrontmatter>;

  if (!frontmatter.title || !frontmatter.publishedAt || !frontmatter.summary) {
    throw new Error(`Missing required frontmatter in ${filePath}`);
  }

  return {
    title: frontmatter.title,
    publishedAt: frontmatter.publishedAt,
    summary: frontmatter.summary,
    image: frontmatter.image,
    draft: frontmatter.draft ?? false,
    slug: getSlug(filePath),
    content,
    readingTime: readingTime(content),
  };
}

export const getAllBlogs = cache(async () => {
  const files = await getBlogFiles(CONTENT_DIR);
  const blogs = await Promise.all(files.map(readBlog));

  return blogs.sort((a, b) =>
    new Date(a.publishedAt) > new Date(b.publishedAt) ? -1 : 1,
  );
});

export const getBlogBySlug = cache(async (slug: string) => {
  const blogs = await getAllBlogs();
  return blogs.find((blog) => blog.slug === slug) ?? null;
});
