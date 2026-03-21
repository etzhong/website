import { BlogCard } from "@/components/blog-card";
import { getAllBlogs } from "@/lib/blogs";
import { generatePageMetadata } from "../seo";
import Link from "next/link";
import { ENV } from "@/lib/env";

export const metadata = generatePageMetadata({
  title: "Blog",
  description: "Read my blogs on web development, design and more.",
});

const isProd = ENV.NODE_ENV === "production";

export default async function Blog() {
  const blogs = await getAllBlogs();
  const undraftedBlogs = isProd ? blogs.filter((blog) => !blog.draft) : blogs;

  return (
    <section>
      <ul>
        {undraftedBlogs.map((blog) => (
          <li
            key={blog.slug}
            className="py-1 divide-y divide-gray-200 dark:divide-gray-700"
          >
            <Link href={`/blog/${blog.slug}`}>
              <BlogCard blog={blog} />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
