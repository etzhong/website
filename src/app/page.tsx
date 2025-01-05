import Image from "next/image";
import { SOCIALS } from "../data/socials";
import { SocialLink } from "@/components/social-link";
import { allBlogs } from "contentlayer/generated";
import { BlogCard } from "@/components/blog-card";
import React from "react";
import { LINKS } from "@/lib/constants";
import Link from "next/link";

export default function Home() {
  const blogs = allBlogs.slice(0, 2).sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) {
      return -1;
    }
    return 1;
  });

  return (
    <React.Fragment>
      <section className="mb-5">
        <Image
          src="/_static/headshot.jpg"
          width={100}
          height={100}
          alt="avatar"
          className="rounded-full cursor-pointer hover:grayscale mb-5"
          priority
        />
        <h1 className="text-2xl font-bold">Hey, I&apos;m Eric!</h1>

        <div className="text-gray-700 dark:text-gray-300">
          <p className="mt-4">
            I&apos;m an engineer, developer, and part-time creative finishing
            up their senior year in Electrical & Computer Engineering +
            Computer Science at the University of Southern California (
            <a
              href="https://viterbischool.usc.edu"
              target="_blank"
              className="border-b inline-block"
            >
            USC
            </a>
            ).
          </p>

          <p className="mt-4">
            Born and raised in the Philly suburbs (Go Birds!), I originally
            ventured out to the City of Angels to become a physicist before
            rediscovering a love for computers and technology. In particular,
            I&apos;m fascinated by low-level systems and computer hardware
            design. Hoping to learn the magic of making electrons dance
            usefully on a rock, a computer engineering lackey was born.
          </p>

          <p className="mt-4 mb-4">
            In the past couple years I&apos;ve worked in a variety of areas,
            including&nbsp;
            <a
                href="https://www.nvidia.com/en-us"
                target="_blank"
                className="border-b inline-block"
            >
              industry hardware engineering,
            </a>
            <a
                href="https://arxiv.org/abs/2401.18050"
                target="_blank"
                className="border-b inline-block"
            >
              photonic computing research,
            </a>
            &nbsp;and&nbsp;
            <a
                href="https://usclavalab.org"
                target="_blank"
                className="border-b inline-block"
            >
              startup development
            </a>
            . Currently I&apos;m interested in leveraging hardware acceleration
            and high performance computing towards solving unique problems,
            along with investigating more modern ways of developing hardware.
          </p>
          
          <p className="mt-4 mb-4">
            Outside of engineering, you can find me reading & writing, playing
            Poker, learning about entreprenuership, or cafe hopping around LA.
          </p>

          <p className="mb-4">
            If you&apos;d like to get in touch, feel free&nbsp;
            <a
              href="mailto:eric@erictzhong.com"
              className="border-b inline-block"
            >
              shoot me an email
            </a>
            &nbsp;or reach out on any of my socials. Cheers!
          </p>
        </div>

        <div className="flex space-x-4 mb-2 mt-4">
          {SOCIALS.map((social) => (
            <SocialLink
              key={social.label}
              aria-label={`Follow on ${social.label}`}
              href={social.href}
              icon={social.icon}
            />
          ))}
        </div>
        <p className="mt-4 border-b inline-block cursor-pointer">
          <a href={LINKS.RESUME} target="_blank" rel="noopener noreferrer">
            View Resume
          </a>
        </p>
      </section>
    </React.Fragment>
  );
}
