"use client";

import Image from "next/image";
import { SOCIALS } from "../data/socials";
import { SocialLink } from "@/components/social-link";
import { allBlogs } from "contentlayer/generated";
import { BlogCard } from "@/components/blog-card";
import React from "react";
import { LINKS } from "@/lib/constants";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";

export default function Home() {
  const blogs = allBlogs.slice(0, 2).sort((a, b) => {
    if (new Date(a.publishedAt) > new Date(b.publishedAt)) return -1;
    return 1;
  });

  const reduce = useReducedMotion?.() ?? false;

  const blockHidden = reduce ? { opacity: 0 } : { opacity: 0, y: 24 };
  const blockShow = (delay = 0) =>
    reduce
      ? { opacity: 1, transition: { duration: 0.35, delay } }
      : {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, delay, ease: [0.22, 0.61, 0.36, 1] },
        };

  const groupVariants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.12, delayChildren: 0.1 },
    },
  };
  const childVariants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1, transition: { duration: 0.35 } } }
    : {
        hidden: { opacity: 0, y: 18 },
        show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 0.61, 0.36, 1] } },
      };

  return (
    <React.Fragment>
      <section className="mb-5">
        {/* Avatar */}
        <motion.div initial={blockHidden} whileInView={blockShow(0)} viewport={{ once: true, amount: 0.2 }}>
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
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-3xl font-bold"
          initial={blockHidden}
          whileInView={blockShow(0.05)}
          viewport={{ once: true, amount: 0.2 }}
        >
          Hey, I&apos;m Eric!
        </motion.h1>

        {/* Body */}
        <div className="text-gray-700 dark:text-gray-300">
          <motion.p className="mt-4" initial={blockHidden} whileInView={blockShow(0.1)} viewport={{ once: true, amount: 0.2 }}>
            Welcome to my cozy little corner of the internet. Sit back, make yourself comfortable,
            and let me tell you a bit about myself.
          </motion.p>

          <motion.p className="mt-4" initial={blockHidden} whileInView={blockShow(0.16)} viewport={{ once: true, amount: 0.2 }}>
            I&apos;m an engineer, developer, and part-time creative based in the Bay Area&mdash;
            specializing in hardware and low-level systems. I&apos;m currently working as a GPU
            Architect at&nbsp;
            <a href="https://www.nvidia.com/en-us" target="_blank" className="border-b inline-block">
              NVIDIA
            </a>
            &nbsp;in Santa Clara. Before that, I graduated concurrently with my master&apos;s and
            bachelor&apos;s in Electrical Engineering and Computer Science from&nbsp;
            <a href="https://viterbischool.usc.edu" target="_blank" className="border-b inline-block">
              USC
            </a>.
          </motion.p>

          <motion.p className="mt-4" initial={blockHidden} whileInView={blockShow(0.22)} viewport={{ once: true, amount: 0.2 }}>
            Born and raised in the Philly suburbs (Go Birds!), I originally
            ventured out to the City of Angels to become a physicist before
            rediscovering a love for computers and technology...
          </motion.p>

          <motion.p className="mt-4 mb-4" initial={blockHidden} whileInView={blockShow(0.28)} viewport={{ once: true, amount: 0.2 }}>
            Over the past several years, I&apos;ve worked across a variety of
            areas&mdash;including GPU hardware design, FPGA engineering, and more.
          </motion.p>

          <motion.p className="mt-4 mb-4" initial={blockHidden} whileInView={blockShow(0.34)} viewport={{ once: true, amount: 0.2 }}>
            Outside of engineering, you can find me reading and writing, shooting archery (I shoot recurve!),
            spending time outdoors, playing poker, or trying out new food spots around the Bay.
          </motion.p>

          <motion.p className="mb-4" initial={blockHidden} whileInView={blockShow(0.4)} viewport={{ once: true, amount: 0.2 }}>
            If you&apos;d like to get in touch, feel free to&nbsp;
            <a href="mailto:eric@erictzhong.com" className="border-b inline-block">shoot me an email</a>
            &nbsp;or reach out on any of my socials.
          </motion.p>

          <motion.p className="mb-4" initial={blockHidden} whileInView={blockShow(0.46)} viewport={{ once: true, amount: 0.2 }}>
            Cheers!
          </motion.p>
        </div>

        {/* Resume */}
        <motion.p
          initial={blockHidden}
          whileInView={blockShow(0.52)}
          viewport={{ once: true, amount: 0.2 }}
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
        </motion.p>

        {/* Socials – now animate in the same way */}
        <motion.div
          className="flex space-x-4 mb-2 mt-6"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          variants={groupVariants}
        >
          {SOCIALS.map((social, i) => (
            <motion.div key={social.label} variants={childVariants}>
              <SocialLink
                aria-label={`Follow on ${social.label}`}
                href={social.href}
                icon={social.icon}
              />
            </motion.div>
          ))}
        </motion.div>
      </section>
    </React.Fragment>
  );
}
