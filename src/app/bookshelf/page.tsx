"use client";

import { generatePageMetadata } from "../seo";
import React from "react";
import {
  CURRENTLY_READING,
  PLAN_TO_READ,
  FINISHED_READING,
} from "@/data/books";
import { AnimatedBookGrid } from "@/components/animated-book-grid";
import { motion, useReducedMotion } from "framer-motion";

export default function Bookshelf() {
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

  return (
    <div className="space-y-12 lg:space-y-12">
      {/* Title + subtitle */}
      <section className="space-y-6 lg:space-y-8">
        <motion.h1
          className="text-5xl font-semibold tracking-tight"
          initial={blockHidden}
          whileInView={blockShow(0.00)}
          viewport={{ once: true, amount: 0.2 }}
        >
          What I&apos;ve been reading... 📖
        </motion.h1>

        <motion.p className="mt-4 mb-4" initial={blockHidden} whileInView={blockShow(0.08)}
          viewport={{ once: true, amount: 0.2 }}>
          A living shelf of notable things I&apos;m currently reading, plan to read. or already read. Currently a mix of
          technical, introspective, and just-for-fun.
        </motion.p>
      </section>

      {/* CURRENTLY READING */}
      <section className="space-y-6 lg:space-y-4">
        <motion.h2
          className="text-2xl font-semibold tracking-tight"
          initial={blockHidden}
          whileInView={blockShow(0.12)}
          viewport={{ once: true, amount: 0.2 }}
        >
          Currently Reading
        </motion.h2>

        {/* Grid appears just after the heading */}
        <motion.div
          initial={blockHidden}
          whileInView={blockShow(0.18)}
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatedBookGrid books={CURRENTLY_READING} />
        </motion.div>
      </section>

      {/* PLAN TO READ */}
      <section className="space-y-6 lg:space-y-4">
        <motion.h2
          className="text-2xl font-semibold tracking-tight"
          initial={blockHidden}
          whileInView={blockShow(0.24)}
          viewport={{ once: true, amount: 0.2 }}
        >
          Plan to Read
        </motion.h2>

        <motion.div
          initial={blockHidden}
          whileInView={blockShow(0.30)}
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatedBookGrid books={PLAN_TO_READ} />
        </motion.div>
      </section>

      {/* FINISHED READING */}
      <section className="space-y-6 lg:space-y-4">
        <motion.h2
          className="text-2xl font-semibold tracking-tight"
          initial={blockHidden}
          whileInView={blockShow(0.36)}
          viewport={{ once: true, amount: 0.2 }}
        >
          Finished Reading
        </motion.h2>

        <motion.div
          initial={blockHidden}
          whileInView={blockShow(0.42)}
          viewport={{ once: true, amount: 0.2 }}
        >
          <AnimatedBookGrid books={FINISHED_READING} />
        </motion.div>
      </section>
    </div>
  );
}
