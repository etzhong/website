import { MetadataRoute } from "next";
import { getAllBlogs } from "@/lib/blogs";
import { siteMetadata } from "@/data/siteMetadata";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = siteMetadata.siteUrl;
  const allBlogs = await getAllBlogs();
  const blogRoutes = allBlogs.map((post) => ({
    url: `${siteUrl}/blog/${post.slug}`,
    lastModified: post.publishedAt,
  }));

  const routes = ["", "blog", "projects"].map((route) => ({
    url: `${siteUrl}/${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogRoutes];
}
