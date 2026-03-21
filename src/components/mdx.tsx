import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { compileMDX } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import rehypePrettyCode, {
  CharsElement,
  LineElement,
} from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import { BlogComments } from "./blog-comments";

function CustomLink(props: { href: string; children: React.ReactNode }) {
  const { href, ...rest } = props;

  if (href.startsWith("/")) {
    return (
      <Link href={href} {...rest}>
        {props.children}
      </Link>
    );
  }

  if (href.startsWith("#")) {
    return <a {...props} />;
  }

  return <a target="_blank" rel="noopener noreferrer" {...props} />;
}

function RoundedImage(props: { alt: string; src: string }) {
  return <Image {...props} alt={props.alt} className="rounded-lg" />;
}

function Callout(props: { emoji: string; children: React.ReactNode }) {
  return (
    <div className="mb-8 flex items-center rounded border border-neutral-200 bg-neutral-50 p-1 px-4 py-3 text-sm text-neutral-900 dark:border-neutral-700 dark:bg-neutral-800 dark:text-neutral-100">
      <div className="mr-4 flex w-4 items-center">{props.emoji}</div>
      <div className="callout w-full">{props.children}</div>
    </div>
  );
}

const components = {
  Image: RoundedImage,
  a: CustomLink,
  Callout,
};

export async function Mdx({ source }: { source: string }) {
  const { content } = await compileMDX({
    source,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [
          rehypeSlug,
          [
            rehypePrettyCode,
            {
              theme: "one-dark-pro",
              keepBackground: false,

              onVisitHighlightedLine(node: LineElement) {
                if (
                  node.properties.className &&
                  node.properties.className.length > 0
                ) {
                  node.properties.className.push("line--highlighted");
                } else {
                  node.properties.className = ["line--highlighted"];
                }
              },
              onVisitHighlightedChars(node: CharsElement) {
                node.properties.className = ["word--highlighted"];
              },
            },
          ],
          [
            rehypeAutolinkHeadings,
            {
              properties: {
                className: ["anchor"],
              },
            },
          ],
        ],
      },
    },
    components,
  });

  return (
    <React.Fragment>
      {/* https://github.com/tailwindlabs/tailwindcss-typography#overriding-max-width */}
      <article className="prose prose-neutral dark:prose-invert prose-quoteless  max-w-none">
        {content}
      </article>
      <BlogComments />
    </React.Fragment>
  );
}
