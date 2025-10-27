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
        width={128}
        height={128}
        alt="avatar"
        priority
        className="
          rounded-full cursor-pointer mb-5
          transition-all duration-300 ease-out
          hover:scale-[1.1] hover:-translate-y-1.5
          hover:shadow-[0_0_90px_rgba(255,255,255,0.5)] dark:hover:shadow-[0_0_90px_rgba(255,255,255,0.35)]
          hover:ring-1 hover:ring-white/80 dark:hover:ring-white/40
          hover:brightness-[1.12]
        "
      />
        <h1 className="text-3xl font-bold">Hey, I&apos;m Eric!</h1>

        <div className="text-gray-700 dark:text-gray-300">
          <p className="mt-4">
            Welcome to my cozy little corner of the internet. Sit back, make yourself comfortable,
            and let me tell you a bit about myself.
          </p>

          <p className="mt-4">
            I&apos;m an engineer, developer, and part-time creative based in the Bay Area&mdash;
            specializing in hardware and low-level systems. I&apos;m currently working as a GPU
            Architect at&nbsp;
            <a href="https://www.nvidia.com/en-us" target="_blank"
              className="border-b inline-block">
              NVIDIA
            </a>
            &nbsp;in Santa Clara. Before that, I graduated concurrently with my master&apos;s and
            bachelor&apos;s in Electrical Engineering and Computer Science from&nbsp;
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
            Outside of engineering, you can find me reading and writing,
            shooting archery (I shoot recurve!), spending time outdoors, playing poker,
            or trying out new food spots around the Bay.
          </p>

          <p className="mb-4">
            If you&apos;d like to get in touch, feel free to&nbsp;
            <a href="mailto:eric@erictzhong.com" className="border-b inline-block">
              shoot me an email
            </a>
            &nbsp;or reach out on any of my socials.
          </p>

          <p className="mb-4"> Cheers! </p>
        </div>

<p
  className="
    inline-block
    rounded-lg border border-zinc-200/60 dark:border-zinc-700/60
    px-5 py-2 text-sm font-medium
    transition-all duration-300 ease-out
    cursor-pointer
    hover:scale-[1.1] hover:-translate-y-[3px]
    hover:shadow-[0_0_60px_rgba(255,255,255,0.45)] dark:hover:shadow-[0_0_60px_rgba(255,255,255,0.3)]
    hover:ring-1 hover:ring-white/60 dark:hover:ring-white/40
    hover:brightness-[1.12]
  "
>
  <a href={LINKS.RESUME} target="_blank" rel="noopener noreferrer">
    View Resume
  </a>
</p>
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
      </section>
    </React.Fragment>
  );
}
