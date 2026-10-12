import { siteMetadata } from "@/data/siteMetadata";
import { Metadata } from "next";

type OwnProps = Omit<
  Metadata,
  "title" | "description" | "openGraph" | "twitter"
> & {
  title: string;
  description?: string;
  image?: string;
};

export function generatePageMetadata({
  title,
  description,
  image,
  ...rest
}: OwnProps): Metadata {
  return {
    title,
    description: description || siteMetadata.description,
    openGraph: {
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      url: "./",
      siteName: siteMetadata.title,
      images: image ? [image] : [siteMetadata.socialBanner],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      title: `${title} | ${siteMetadata.title}`,
      card: "summary_large_image",
      images: image ? [image] : [siteMetadata.socialBanner],
    },
    ...rest,
  };
}
