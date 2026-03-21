import type { Metadata } from "next";
import { getAllBlogs, getBlogBySlug } from "@/lib/blogs";
import Balancer from "react-wrap-balancer";
import { Mdx } from "@/components/mdx";
import { siteMetadata } from "@/data/siteMetadata";
import NotFound from "@/app/not-found";
import { formatDate } from "@/lib/utils";

type BlogPageParams = Promise<{ slug: string }>;

export async function generateStaticParams() {
  const blogs = await getAllBlogs();
  const paths = blogs.map((blog) => ({ slug: blog.slug }));

  return paths;
}

export async function generateMetadata({
  params,
}: {
  params: BlogPageParams;
}): Promise<Metadata | undefined> {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);
  if (!blog) {
    return;
  }

  const ogImage = `${siteMetadata.siteUrl}/og?title=${blog.title}`;

  return {
    title: blog.title,
    description: blog.summary,
    openGraph: {
      title: blog.title,
      description: blog.summary,
      siteName: siteMetadata.title,
      locale: "en_US",
      type: "article",
      publishedTime: blog.publishedAt,
      url: "./",
      authors: siteMetadata.author,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: blog.title,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: blog.title,
      description: blog.summary,
      images: [ogImage],
    },
  };
}

export default async function Blog({ params }: { params: BlogPageParams }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  if (!blog) {
    return <NotFound />;
  }

  return (
    <section>
      <h1 className="text-2xl font-bold tracking-tighter">
        <Balancer>{blog.title}</Balancer>
      </h1>
      <div className="mb-8 mt-2 flex items-center justify-between text-sm text-neutral-600 dark:text-neutral-400">
        <p>
          {formatDate(blog.publishedAt)} - {blog.readingTime.text}
        </p>
      </div>
      <Mdx source={blog.content} />
    </section>
  );
}
