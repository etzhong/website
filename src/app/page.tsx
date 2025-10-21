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
            I&apos;m an engineer, developer, and part-time creative based in
            the Bay Area&mdash;specializing in hardware and low-level systems.
            I&apos;m currently working as a GPU Architect at&nbsp;
            <a href="https://www.nvidia.com/en-us" target="_blank"
              className="border-b inline-block"
            >
            NVIDIA
            </a>
            &nbsp;in Santa Clara. Before that, I graduated concurrently with
            my master&apos;s and bachelor&apos;s in Electrical Engineering and
            Computer Science from&nbsp;
            <a href="https://viterbischool.usc.edu" target="_blank"
              className="border-b inline-block">
            USC
            </a>.
          </p>


          <p className="mt-4">
            Born and raised in the Philly suburbs (Go Birds!), I originally
            ventured out to the City of Angels to become a physicist before
            rediscovering a love for computers and technology. In particular,
            I was fascinated by low-level systems and hardware design. Hoping
            to learn the magic of making electrons efficiently dance on a rock,
            a computer engineering lackey was born.
          </p>

          <p className="mt-4 mb-4">
            Over the past several years, I&apos;ve worked across a variety of
            areas&mdash;including GPU hardware design, FPGA engineering,
            low-level software development, photonic computing research, and
            entrepreneurship. Currently I&apos;m interested in hardware
            acceleration, reconfigurable computing (especially FPGAs),
            open-source silicon, and hardware/software co-design.
          </p>

          <p className="mt-4 mb-4">
            Outside of engineering, you can find me reading and writing, doing
            archery (I shoot recurve!), spending time outdoors, playing poker,
            or trying out new food spots around the Bay.
          </p>

          <p className="mb-4">
            If you&apos;d like to get in touch, feel free to&nbsp;
            <a
              href="mailto:eric@erictzhong.com"
              className="border-b inline-block"
            >
              shoot me an email
            </a>
            &nbsp;or reach out on any of my socials.
          </p>

          <p className="mb-4">
          Cheers!
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
